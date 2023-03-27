import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/pjy-portfolio">
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Layout}>
          <Route path="/about" Component={About} />
          <Route path="/skills" Component={Skills} />
          <Route path='/project' Component={Project} />
          <Route path="/contact" Component={Contact} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
