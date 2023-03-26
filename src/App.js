import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Layout/>}>
          <Route path='/skills' element={<Skills/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
