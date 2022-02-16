import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: HE;
    background-color: #131921;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
`;

export const StoreLink = styled.h1`
    color: #FFFFFF;
    text-decoration: inherit;
`;

export const ShoppingCart = styled.div`
    width: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const Cart = styled.img`
    width: 100%;
`;