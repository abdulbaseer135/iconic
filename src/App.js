import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import ServiceDetail from './components/Services/ServiceDetail/ServiceDetail'
import AuthForm from './components/AuthForm/AuthForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />

        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
