import React from 'react'
import { NavLink as NavLinkRR } from 'react-router-dom'

const NavLink = ({to,children}) => {
  return (
    <NavLinkRR to={to} className={({isActive}) => isActive ? 'activeStyle' : undefined}>
        {children}
    </NavLinkRR>   
  )
}

export default NavLink