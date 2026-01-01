import Navbar from './components/Navbar/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Project from './sections/Projects/Project';
//import Contact from './sections/Contact/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      {/*<Contact />*/}
      <main style={{ paddingTop: '70px' }}>
        {/* Your sections go here */}
      </main>
    </>
  );
}

export default App;
