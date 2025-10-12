import NavBar from './components/organisms/navbar.jsx';
import Hero  from './components/organisms/hero.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/organisms/projects.jsx';
import Footer from './components/organisms/footer.jsx';
import News from './components/organisms/news.jsx';


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <News />
      <Footer/>
    </>
  );
}

export default App;