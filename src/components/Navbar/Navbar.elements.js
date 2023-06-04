import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 9999;
  background-color: ${({ show }) => (show ? "rgba(0,0,0,0.8)" : "transparent")};

  @media screen and (max-width: 960px) {
    background-color: #48bb78;
  }
`;
export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Poppins";
  color: ${({ show }) => (show ? "#FFF" : "#48BB78")};

  &:hover {
    color: "#48BB78";
  }

  @media screen and (max-width: 960px) {
    color: #fff;
  }
`;
export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: red;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.3s all ease-in;
    background-color: #48bb78;
    color: ${({ show }) => (show ? "red" : "blue")};
  }
`;
export const MenuItem = styled.a`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  transition: 0.3s all ease-in;

  color: ${({ show }) => (show ? "red" : "blue")};

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled.li`
  text-decoration: none;

  ${(props) => {
    switch (props.$mode) {
      case true:
        return css`
            color: ${({ show }) => (show ? "#fff" : "#27374D")};
        `;
      default:
        return css`
          color: white;
        `;
    }
  }}

/* ${(props) => {
    switch (props.show) {
      case true:
        return css`
          color: white;
        `;
      default:
        return css`
          color: white;
        `;
    }
  }} */

  &:hover {
    color: #48bb78;
  }
`;

export const IconLogoMobile = styled.a`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: aqua;
    font-size: 2rem;
  }
`;
