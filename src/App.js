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
        <Route path={process.env.PUBLIC_URL + '/'} element={<Main/>} />
        <Route path={process.env.PUBLIC_URL + '/home/'} element={<Home/>}/>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Layout/>}>
          <Route path={process.env.PUBLIC_URL + '/skills/'} element={<Skills/>}/> 
          <Route path={process.env.PUBLIC_URL + '/about/'} element={<About/>}/> 
          <Route path={process.env.PUBLIC_URL + '/contact/'} element={<Contact/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
