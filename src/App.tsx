import { useState } from 'react'
import { I18nProvider } from './context/I18nContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="relative min-h-screen">
      {/* Background decoration blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 -left-40 h-150 w-150 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-40 h-125 w-125 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] h-150 w-150 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  )
}
