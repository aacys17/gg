import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(135deg, #F4BD7C, #F57691);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  margin-left: -200px;
  // white-space: nowrap; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Button = styled.button`
  width: 8rem;
  display: flex;
  padding: 1rem;
  height: 3rem;
  margin-top: 1rem;
  margin-left: 4rem;
  background-color: #6A4C4C;
  color: #fff;
  font-size: 1rem;
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: 25px;
`;

export const Heading = styled.div`
  margin-left: 9rem;
  p {
    margin-right: 9rem;
    font-size: 1.5rem;
    color: red;
  }
  `;
