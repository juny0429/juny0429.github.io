import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'https://juny0429.github.io/pjy-portfolio/'} element={<Main/>} />
        <Route path={'https://juny0429.github.io/pjy-portfolio/home/'} element={<Home/>}/>
        <Route path={'https://juny0429.github.io/pjy-portfolio/'} element={<Layout/>}>
          <Route path={'https://juny0429.github.io/pjy-portfolio/skills/'} element={<Skills/>}/> 
          <Route path={'https://juny0429.github.io/pjy-portfolio/about/'} element={<About/>}/> 
          <Route path={'https://juny0429.github.io/pjy-portfolio/contact/'} element={<Contact/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
