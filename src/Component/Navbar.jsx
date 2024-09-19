import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return(
        <>
            <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Login</Link>
            </div>
        </>
    )
}

export default Navbar;