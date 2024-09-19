import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Product from './Page/Product';
import Login from './Page/Login';
import Navbar from './Component/Navbar'
import PrivateRoute from './PrivateRoute';


function App() {
    return(
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
        </>
    )
  
}

export default App
