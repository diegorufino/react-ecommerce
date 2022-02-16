import React from "react";
import { Link } from "react-router-dom";

import { 
    Container, 
    ShoppingCart, 
    Cart, 
    StoreLink 
} from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <Link to="/">
                <StoreLink>Store</StoreLink>
            </Link>
            <Link to="/carrinho">
                <ShoppingCart>
                    <Cart 
                        alt="Shopping Cart" 
                        src="assets/icon_shopping_cart.svg" 
                    />
                </ShoppingCart>
            </Link>
        </Container>
    )
}

export default Header;