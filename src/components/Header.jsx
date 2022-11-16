import { NavLink } from "react-router-dom";

// COMPONENTS //
import NavBar from './NavBar';

// STYLES //
import '../styles/Header/Header.css';

// IMAGES //
import logo from '../images/LOGO.svg';


const Header = () => {
    return (
            <header>
                {/* <NavLink to="/" end> */}
                <NavLink to="/home" end>
                        <img className='logo' src={logo} alt={`Logo KASA`} />
                </NavLink>
                <NavBar />
            </header>
    )
}

export default Header;