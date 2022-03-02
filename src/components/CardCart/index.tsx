import React from "react";

import { 
    Container,
    Image,
    Price,
    Title,
    AddCart,
    Item,
    Amount
} from "./styles";
import { IItem } from "../../types";

const CardCart: React.FC<IItem | any> = ({
    id,
    title,
    price,
    image,
    button,
    amount
}) => {
    return (
        <Container>
            <Image width={100} src={image} alt={title} />
            <Item>
                <Title>{title}</Title>
                <AddCart>{button}</AddCart> 
            </Item>
            <Item>
                <Amount value={amount} /> 
                <Price>R$ {price}</Price>
            </Item>
        </Container>
    )
}

export default CardCart;