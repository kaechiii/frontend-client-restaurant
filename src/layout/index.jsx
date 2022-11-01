import React from 'react'
import NavbarTop from '../components/NavBarTop'
import {Outlet} from 'react-router-dom';

function Layout() {
  return (
    <>
        <NavbarTop></NavbarTop>
        <Outlet />
    </>
    
  )
}

export default Layout