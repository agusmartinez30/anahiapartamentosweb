import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import { useParams } from 'react-router-dom';


import { useState } from "react";
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from "./Navbar.elements";
import { useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [detail, setDetail] = useState(false)
  const { key } = useParams();

  const showNavbar = () => {
    setShow(!show)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    if(!key){
      return setDetail(false)
    }

    setDetail(true)

  }, [detail, scroll])

  const handleScroll = () => {
    const scrollY = window.scrollY;
    scrollY > 100 ? setScroll(true) : setScroll(false)
  }


  return (
    <NavbarContainer show={scroll}>
      <NavbarWrapper show={scroll}>
        <a href="/">
          <IconLogo show={scroll}>Anahi Apartamentos</IconLogo>
        </a>

        <IconLogoMobile>
          {
            show ? <CloseBtn toggle={showNavbar} /> : <OpenBtn toggle={showNavbar} />
          }
        </IconLogoMobile>
        <Menu  click={show} show={scroll}>
          <MenuItem href="/#propiedades" onClick={showNavbar} show={scroll} >
            <MenuItemLink $mode={detail} show={scroll}  >
              Propiedades
            </MenuItemLink>
          </MenuItem>
          <MenuItem href="/#empresa" onClick={showNavbar}>
            <MenuItemLink $mode={detail} show={scroll}>
              Nosotros
            </MenuItemLink>
          </MenuItem>
          <MenuItem href="/#servicios" onClick={showNavbar}>
            <MenuItemLink $mode={detail} show={scroll} >
              Servicios
            </MenuItemLink>
          </MenuItem>
          <MenuItem href="/#reseñas" onClick={showNavbar}>
            <MenuItemLink $mode={detail} show={scroll}>
              Reseñas
            </MenuItemLink>
          </MenuItem>
          <MenuItem href="/#ubicacion" onClick={showNavbar}>
            <MenuItemLink $mode={detail} show={scroll}>
              Ubicación
            </MenuItemLink>
          </MenuItem>
        </Menu>

      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;

export function CloseBtn({ toggle }) {
  return (
    <button className="nav-btn nav-close-btn" onClick={toggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-x"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#fff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  )
}
export function OpenBtn({ toggle }) {
  return (
    <button className="nav-btn nav-close-btn" onClick={toggle}>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </button>
  )
} 
