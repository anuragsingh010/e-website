import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav1 from "./Nav1";

const Header = () => {
  return (
    <MainHeader>
        
      <Nav1 />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: #ffe5e5;  //${({ theme }) => theme.colors.bg};
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
