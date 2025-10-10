import NavBar from './components/organisms/navbar.jsx';
import Hero  from './components/organisms/hero.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/organisms/projects.jsx';
import Footer from './components/organisms/footer.jsx';


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Footer/>
    </>
  );
}

export default App;