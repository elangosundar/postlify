import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { HomeIcon } from './Icon';

const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 75px;
  /* background: ${(props) => props.theme.grey}; */
  background-color: var(--bg-dark-color);
  padding-top: 10px;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  &::-webkit-scrollbar {
    width: 0;
  }

  .icon {
    align-items: center;
    padding: 15px;
  }

  .icon a {
    border-radius: 50%;
    color: var(--fg-light-color);
    fill: var(--fg-light-color);
    background-color: var(--bg-light-color);
    padding: 10px;
    padding-top: 28px;
  }

  .Nav{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  .active svg {
    fill: #fff;
    padding: 5px;
  }

  .icon span {
    padding-left: 1rem;
    position: relative;
    top: 1px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="icon">
        <NavLink
          exact
          to="/"
          activeClassName="active"
        >
          <HomeIcon />
          {/* <span>Home</span> */}
        </NavLink>
      </div>
      
      <div className="icon">
        <NavLink
          exact
          to="/"
          activeClassName="active"
        >
          <HomeIcon />
          {/* <span>Home</span> */}
        </NavLink>
      </div>

      <div className="icon">
        <NavLink
          exact
          to="/"
          activeClassName="active"
        >
          <HomeIcon />
          {/* <span>Home</span> */}
        </NavLink>
      </div>

    </SidebarWrapper>
  );
}

export default Sidebar;
