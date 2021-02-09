import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Router>
      <SidebarMenu>
        <SidebarLink to='/'>Hamburgesas</SidebarLink>
        <SidebarLink to='/'>Chahuarmas</SidebarLink>
        <SidebarLink to='/'>Menu Completo</SidebarLink>
      </SidebarMenu>
      </Router>
      <SideBtnWrap>
        <SidebarRoute to='/'>Pedir Ya</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;