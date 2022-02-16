import React from "react";

import { Container } from "./styles";
import { IProdutosProps } from "../../types";

const Card: React.FC<IProdutosProps> = ({
    id,
    title,
    price,
    image
}) => {
    return (
        <Container>
            <span>{title}</span>
            <h1>{price}</h1>
            <img src={image} alt={title} />         
        </Container>
    )
}

export default Card;