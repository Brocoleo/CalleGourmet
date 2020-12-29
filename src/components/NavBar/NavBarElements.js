import styled from 'styled-components';
import {NavLink as Link } from'react-router-dom';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
        color: #ffff
        font-size: 2rem;
        display: flex;
        align-items: center;
        cursor: pointer;

        @media screen and (max-width: 400px){
            position: absolute;
            top: 10px;
            left: 25 px;
        }
`;