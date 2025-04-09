import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { LeadMagnet } from './components/LeadMagnet';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';
import { ThemeProvider } from './components/ThemeProvider';
import { StrategyForm } from './components/StrategyForm';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#282a36] transition-colors duration-200">
          <Routes>
            <Route path="/" element={
              <>
                <Navigation />
                <main>
                  <Hero />
                  <Services />
                  <Projects />
                  <Team />
                  <LeadMagnet />
                </main>
                <Footer />
                <FloatingChat />
              </>
            } />
            <Route path="/estrategia" element={<StrategyForm />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;