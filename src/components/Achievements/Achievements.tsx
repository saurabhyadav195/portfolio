import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useTranslation } from '../../context/I18nContext'
import './Achievements.css'

/* ─────────────────────────────────────────────────────────────
   Constants
───────────────────────────────────────────────────────────── */
const GITHUB_USERNAME = 'saurabhyadav195'
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`

const PORTFOLIO_THEME = {
  light: ['#eaeff8', '#b3cde8', '#70a9d4', '#3a7dba', '#0e6ba8'],
}


const BLOCK_MARGIN = 4
const WEEKDAY_LABEL_WIDTH = 28   // px — space react-activity-calendar reserves for day labels
const BLOCK_MIN = 10             // never compress cells below 10px (readable floor)
const BLOCK_MAX = 15             // never expand cells above 15px (GitHub uses ~13px)

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
interface TooltipState {
  day: Activity
  cellRect: DOMRect
}

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */

/** Format "YYYY-MM-DD" → "Tuesday, August 4, 2026" */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

/**
 * Count how many week columns (Sunday→Saturday) the dataset spans.
 *
 * react-activity-calendar groups data into columns starting on weekStart (0=Sun).
 * numWeeks = ceil((totalDays + startDayOffset) / 7)
 * where startDayOffset = days from weekStart to the first data entry's day-of-week.
 */
function countWeekColumns(data: Activity[], weekStart = 0): number {
  if (data.length === 0) return 53 // safe fallback
  const first = new Date(data[0].date + 'T12:00:00Z')
  const last  = new Date(data[data.length - 1].date + 'T12:00:00Z')
  const startDow  = (first.getUTCDay() - weekStart + 7) % 7
  const totalDays = Math.round((last.getTime() - first.getTime()) / 86400000) + 1
  return Math.ceil((totalDays + startDow) / 7)
}

/* ─────────────────────────────────────────────────────────────
   Framer Motion variants
───────────────────────────────────────────────────────────── */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

/* ─────────────────────────────────────────────────────────────
   Achievements Component
───────────────────────────────────────────────────────────── */
export default function Achievements() {
  const { t } = useTranslation()

  // ── Data state ──
  const [contributions, setContributions] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // ── Dynamic block size: computed from container width via ResizeObserver ──
  const calendarContainerRef = useRef<HTMLDivElement>(null)
  const [blockSize, setBlockSize] = useState(12) // starts at GitHub default; updated after mount

  // ── Tooltip state ──
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Fetch real GitHub contributions ──
  // The API returns every day in the last year including 0-contribution days.
  // No filtering is applied — all records are passed directly to ActivityCalendar.
  useEffect(() => {
    let cancelled = false
    fetch(CONTRIBUTIONS_API)
      .then((r) => r.json())
      .then((data: { contributions: Activity[] }) => {
        if (!cancelled) {
          setContributions(data.contributions || [])
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  // ── Dynamically compute blockSize to fill the container width edge-to-edge ──
  // Triggered: (a) after data loads (numWeeks is then known), (b) on every resize.
  useEffect(() => {
    if (!calendarContainerRef.current || contributions.length === 0) return

    const numWeeks = countWeekColumns(contributions, 0)

    const compute = (containerWidth: number) => {
      // Solve for blockSize so the SVG fills the container:
      //   (blockSize + BLOCK_MARGIN) × numWeeks + WEEKDAY_LABEL_WIDTH = containerWidth
      //   blockSize = (containerWidth - WEEKDAY_LABEL_WIDTH) / numWeeks - BLOCK_MARGIN
      const raw = (containerWidth - WEEKDAY_LABEL_WIDTH) / numWeeks - BLOCK_MARGIN
      setBlockSize(Math.max(BLOCK_MIN, Math.min(BLOCK_MAX, Math.floor(raw))))
    }

    // Measure immediately on mount / data-load
    compute(calendarContainerRef.current.clientWidth)

    // Re-measure whenever the container resizes (window resize, sidebar open, etc.)
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        compute(entry.contentRect.width)
      }
    })
    ro.observe(calendarContainerRef.current)
    return () => ro.disconnect()
  }, [contributions]) // re-run when contributions change (numWeeks may change)

  // ── Position tooltip after render ──
  useEffect(() => {
    if (!tooltipRef.current || !tooltip || !tooltipVisible) return

    const el = tooltipRef.current
    el.classList.remove('contrib-tooltip--below')

    const tipRect = el.getBoundingClientRect()
    const { cellRect } = tooltip
    const MARGIN = 8

    let top  = cellRect.top - tipRect.height - MARGIN
    let left = cellRect.left + cellRect.width / 2 - tipRect.width / 2

    if (top < MARGIN) {
      top = cellRect.bottom + MARGIN
      el.classList.add('contrib-tooltip--below')
    }

    const vpW = window.innerWidth
    if (left < MARGIN) left = MARGIN
    else if (left + tipRect.width > vpW - MARGIN) left = vpW - tipRect.width - MARGIN

    el.style.top  = `${top}px`
    el.style.left = `${left}px`
  }, [tooltip, tooltipVisible])

  // ── Tooltip show/hide handlers ──
  const showTooltip = useCallback((day: Activity, el: Element) => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setTooltip({ day, cellRect: el.getBoundingClientRect() })
    setTooltipVisible(true)
  }, [])

  const hideTooltip = useCallback(() => {
    setTooltipVisible(false)
    hideTimer.current = setTimeout(() => setTooltip(null), 200)
  }, [])

  return (
    <SectionWrapper id="achievements">
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-(--color-accent) font-semibold">
          {t('github.subtitle')}
        </p>
        <h2 className="section-title">
          {t('github.title')}{' '}
          <span className="accent-underline gradient-text">{t('github.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('github.description')}
        </p>
      </motion.div>

      <div className="achievements-grid">
        {/* Contribution graph — full width */}
        <motion.div variants={itemVariants} className="achievements-card achievements-card--wide">
          <div className="achievements-card-header">
            <div className="achievements-card-title-row">
              <FaGithub className="achievements-card-icon" />
              <h3 className="achievements-card-title">{t('github.graphTitle')}</h3>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="achievements-profile-link"
            >
              {t('github.viewProfile')}
              <HiArrowTopRightOnSquare style={{ width: 16, height: 16 }} />
            </a>
          </div>

          {/* ── Graph area ── */}
          <div className="contrib-graph" aria-label="GitHub contribution graph">
            {loading && (
              <div className="contrib-loading">Loading contributions…</div>
            )}

            {error && (
              <div className="contrib-loading contrib-loading--error">
                Could not load contributions.
              </div>
            )}

            {!loading && !error && contributions.length > 0 && (
              <div className="contrib-calendar-container" ref={calendarContainerRef}>
                <ActivityCalendar
                  data={contributions}
                  weekStart={0}
                  showWeekdayLabels={['mon', 'wed', 'fri']}
                  blockSize={blockSize}
                  blockMargin={BLOCK_MARGIN}
                  blockRadius={2}
                  fontSize={12}
                  colorScheme="light"
                  theme={PORTFOLIO_THEME}
                  showColorLegend={false}
                  showTotalCount={false}
                  labels={{
                    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                  }}
                  renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                      className: 'contrib-cell',
                      tabIndex: 0,
                      role: 'button',
                      'aria-label':
                        activity.count > 0
                          ? `${activity.count} contribution${activity.count === 1 ? '' : 's'} on ${formatDate(activity.date)}`
                          : `No contributions on ${formatDate(activity.date)}`,
                      onMouseEnter: (e: React.MouseEvent<SVGRectElement>) => showTooltip(activity, e.currentTarget),
                      onMouseLeave: hideTooltip,
                      onFocus: (e: React.FocusEvent<SVGRectElement>) => showTooltip(activity, e.currentTarget),
                      onBlur: hideTooltip,
                      onKeyDown: (e: React.KeyboardEvent<SVGRectElement>) => e.key === 'Escape' && hideTooltip(),
                    })
                  }
                />

                {/* Legend */}
                <div className="contrib-legend" aria-hidden="true">
                  <span className="contrib-legend-label">Less</span>
                  <div className="contrib-legend-cells">
                    {([0, 1, 2, 3, 4] as const).map((lv) => (
                      <div key={lv} className={`contrib-cell-legend contrib-cell--level-${lv}`} />
                    ))}
                  </div>
                  <span className="contrib-legend-label">More</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Single reused tooltip ── */}
      <div
        ref={tooltipRef}
        className={`contrib-tooltip${tooltipVisible && tooltip ? ' contrib-tooltip--visible' : ''}`}
        role="tooltip"
        aria-live="polite"
      >
        {tooltip && (
          <>
            <div className="contrib-tooltip__count">
              {tooltip.day.count > 0
                ? `${tooltip.day.count} contribution${tooltip.day.count === 1 ? '' : 's'}`
                : 'No contributions'}
            </div>
            <div className="contrib-tooltip__date">{formatDate(tooltip.day.date)}</div>
          </>
        )}
      </div>
    </SectionWrapper>
  )
}
