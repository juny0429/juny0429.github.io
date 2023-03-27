import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path="/" element={<Main/>} /> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Layout/>}>
          <Route path="/skills" element={<Skills/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="contact" element={<Contact/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
