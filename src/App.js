import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import SmartBookingButton from './components/SmartBookingButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Booking from './pages/Booking';
import FAQ from './pages/FAQ';
import Reviews from './pages/Reviews';
import Promotions from './pages/Promotions';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
          <SmartBookingButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 