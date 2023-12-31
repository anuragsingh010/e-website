import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="my logo img" class='header-img rotate linear infinite'/>
      </NavLink>
      <NavLink to="/">
         <img src="./images/header-img.png" alt="my logo img" class='header-img'/> 
      </NavLink>
      <Nav />
    </MainHeader>
  );
};
  
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #ffffff;  //${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

  .header-img{
    height: 65px;
    
  }
  .rotate {
    animation: rotation 3s;
  }
  
  .linear {
    animation-timing-function: linear;
  }
  
  .infinite {
    animation-iteration-count: infinite;
  }
  
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
export default Header;
