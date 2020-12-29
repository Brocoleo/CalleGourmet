import React from 'react'
import {Nav, NavLink} from './NavBarElements';

const NavBar  = () => {
    return (
        <>
           <Nav>
               <NavLink to='/'>Pizza</NavLink>
            </Nav> 
        </>
    )
}

export default NavBar