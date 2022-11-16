import { NavLink } from "react-router-dom";

import '../styles/Header/NavBar.css'

const NavBar = () => {

    let activeStyle = {
        textDecoration: "underline",
      };

    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink 
                        to="/home" end
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar