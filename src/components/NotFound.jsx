import {React, useEffect } from 'react'
import { NavLink } from "react-router-dom";

// STYLES //
import '../styles/NotFound.css'

const NotFound = () => {

    useEffect(() => {
        document.title = 'Not found'
    })
    
    return (
        <div className='not-found--container'>
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink
                to= '/home' end
                style={{ textDecoration: 'underline' }}
            >
                <span>Retourner sur la page d'accueil</span>
            </NavLink>
        </div>
    )
}
 
export default NotFound