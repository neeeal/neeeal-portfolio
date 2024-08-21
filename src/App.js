import './App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Footer from './pages/Footer'
import Certifications from './pages/Certifications'
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Certifications />
      <Projects />
      <ContactMe />
      <Footer />
    </div >
  );
}

export default App;
