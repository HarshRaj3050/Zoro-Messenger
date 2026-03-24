import React from 'react'
import { NavList } from './navItems.jsx'

const MainNavDesktop = () => {
  return (
    <div className="hidden md:flex flex-col justify-between h-full">
      <NavList />
    </div>
  )
}

export default MainNavDesktop