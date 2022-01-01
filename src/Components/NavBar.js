import React, { useEffect, useState } from 'react';
import { Collapse, Navbar, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { mdiMenu, mdiClose } from '@mdi/js';
import { useLocation } from 'react-router-dom';
import Icon from '@mdi/react';

export const links = [
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Services',
    to: '/services',
  },
  {
    title: 'Process',
    to: '/process',
  },
];

const NavBar = ({ isSmall }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset > 5);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position > 5);
  };

  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <Navbar
        className={`${scrollPosition ? 'shadow' : ''}  px-lg-5 py-0`}
        color={scrollPosition ? 'white' : isSmall ? 'white' : 'transparent'}
        expand="lg"
        fixed="top"
        light
      >
        <Link to="/" className="py-3" replace>
          <img
            src={logo}
            alt=""
            height={scrollPosition ? '75px' : isSmall ? '75px' : '110px'}
          />
        </Link>
        <Button
          color="transparent"
          className="px-0 d-block d-lg-none"
          onClick={toggleNavbar}
        >
          <Icon
            path={collapsed ? mdiMenu : mdiClose}
            color="#37784f"
            size={1.5}
          />
        </Button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto my-2 mb-4 my-lg-0" navbar>
            {links.map(({ title, to }) => {
              return (
                <NavItem className="d-flex align-items-center p-1 mr-5 h4 my-2 my-lg-0 mb-0 head font-weight-bold">
                  <CustomNavLink to={to} className="text-primary" replace>
                    {title}
                  </CustomNavLink>
                </NavItem>
              );
            })}
            <NavItem className="mt-2 mt-lg-0 ml-lg-3">
              <Link to="/contact" replace>
                <Button className="px-4 btn-lg bg-primary border-0 rounded head">
                  Contact Us
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

const CustomNavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default NavBar;
