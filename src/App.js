import React, { useEffect } from 'react';

import Nav from './components/nav';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
// import ContactForm from './components/contactForm';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/js/scripts.js';
    document.body.appendChild(script);
    const s = document.createElement('s');
    s.src = 'assets/assets/mail/contact_me.js';
    document.body.appendChild(s);
  }, [])

  return (
    <div>
      <Nav />
      <Header />
      <Projects />
      <About />
      <Skills />
      <Contact />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
