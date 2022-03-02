import React from "react";

import { 
    Container,
    Image,
    Price,
    Title,
    AddCart
} from "./styles";
import { IItem } from "../../types";

const Card: React.FC<IItem | any> = ({
    id,
    title,
    price,
    image,
    button
}) => {
    return (
        <Container>
            <Image width={100} src={image} alt={title} />
            <Price>R$ {price}</Price>
            <Title>{title}</Title>
            <AddCart>{button}</AddCart>
        </Container>
    )
}

export default Card;