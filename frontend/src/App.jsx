import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './App.css'

function App() {
  useEffect(() => {
    // Polyfill for smooth scrolling in older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('smoothscroll-polyfill').then(smoothscroll => {
        smoothscroll.polyfill();
      }).catch(() => {
        // Polyfill failed to load, smooth scrolling will use fallback
        console.log('Smooth scroll polyfill not available');
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-navy transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
