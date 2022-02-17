import React from "react";

import { 
    Container,
    Image,
    Price,
    Title,
    AddCart
} from "./styles";
import { IProdutosProps } from "../../types";

const Card: React.FC<IProdutosProps> = ({
    id,
    title,
    price,
    image
}) => {
    return (
        <Container>
            <Image width={100} src={image} alt={title} />
            <Price>R$ {price}</Price>
            <Title>{title}</Title>
            <AddCart>Adicionar ao carrinho</AddCart>
        </Container>
    )
}

export default Card;