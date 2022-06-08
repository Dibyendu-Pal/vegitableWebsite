import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Items from './Components/Items';
import MyAccount from './Components/MyAccount';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Items />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/myAccount' element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
