import Navbar from './components/Navbar/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Project from './sections/Projects/Project';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        {/* Your sections go here */}
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      </main>
    </>
  );
}

export default App;
