import React, {useState, useEffect} from "react";
import axios from "axios";

import Card from "../../components/Card";
import {
    Container,
    Content
} from "./styles";
import {IProdutosProps} from "../../types";

const Produtos: React.FC = () => {
    const [produtos, setProdutos] = useState<IProdutosProps[]>([]);

    const listarProdutos = () => {
        axios.get('https://fakestoreapi.com/products'
        ).then(response => {
            const listaDeProdutos = response.data;
            setProdutos(listaDeProdutos)
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        listarProdutos();
    }, [])

    return (
        <Container>
            <Content>
                {
                    produtos.map(e => 
                        <Card
                            id={e.id}
                            title={e.title}
                            price={e.price}
                            image={e.image}
                        /> 
                    )
                } 
            </Content>
        </Container>
    )
}

export default Produtos;