import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { I18nProvider } from './context/I18nContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="relative min-h-screen">
      {/* Background decoration blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="grow pt-20">
          <Routes>
            <Route path="/"             element={<Hero />}         />
            <Route path="/education"    element={<Education />}    />
            <Route path="/skills"       element={<Skills />}       />
            <Route path="/experience"   element={<Experience />}   />
            <Route path="/projects"     element={<Projects />}     />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact"      element={<Contact />}      />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <ScrollToTop />
      <AppContent />
    </I18nProvider>
  )
}
