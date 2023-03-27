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
        <Route path='/pjy-portfolio' element={<Main/>} />
        <Route path='/pjy-portfolio/home' element={<Home/>}/>
        <Route path='/' element={<Layout/>}>
          <Route path='/pjy-portfolio/skills' element={<Skills/>}/> 
          <Route path='/pjy-portfolio/about' element={<About/>}/> 
          <Route path='/pjy-portfolio/contact' element={<Contact/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
