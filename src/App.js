// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import ScrollToTop from './components/ScrollToTop';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ServicesPage from './pages/ServicesPage';
// import IndustriesPage from './pages/IndustriesPage';
// import AboutPage from './pages/AboutPage';
// import InsightsPage from './pages/InsightsPage';
// import ContactPage from './pages/ContactPage';
// import ChatBot from './components/ChatBot';

// function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/industries" element={<IndustriesPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/insights" element={<InsightsPage />} />
//         <Route path="/contact" element={<ContactPage />} />
       
//       </Routes>
//        <ChatBot/>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ChatBot />
    </>
  );
}

export default App;