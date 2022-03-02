import React, {useState, useEffect, Dispatch} from "react";
import axios from "axios";
import { 
    shallowEqual, 
    useDispatch, 
    useSelector 
} from "react-redux";

import Card from "../../components/Card";
import { Container, Content } from "./styles";
import { IItem, ItemState } from "../../types";
import useCheck from "../../hooks/useCheck";
import { ensure } from "../../utils";

type Props = {
    saveItem: (item: IItem | any) => void,
    removeItem: (item: IItem) => void
}

const Produtos: React.FC<Props> = ({ saveItem, removeItem }) => {
    const [produtos, setProdutos] = useState<IItem[]>([]);
    const check = useCheck;
    
    const dispatch: Dispatch<any> = useDispatch();
    
    const items: readonly IItem[] = useSelector(
        (state: ItemState) => state.items,
        shallowEqual
      )

    const HandleClick = (id: number) => {
        if (check(id, items)){
            const itemRemove = ensure(items.find(i => i.id === id));
            deleteItem(itemRemove);
        }else{
            const add = ensure(produtos.find(i => i.id === id));
            saveItem(add);
        }
    }

    const deleteItem = React.useCallback(
        (item: IItem) => dispatch(removeItem(item)),
        [dispatch, removeItem]
    );

    const listarProdutos = () => {
        axios.get('https://fakestoreapi.com/products'
        ).then(response => {
            const listaDeProdutos = response.data;
            setProdutos(listaDeProdutos)
        }).catch(error => {
            console.log(error)
        });
    }

    const ButtonAction = (id: number) => {
        return (
            <button onClick={() => HandleClick(id)}>
                { check(id, items) ? "Remover" : "Adicionar ao carrinho" }
            </button>
        )
    }

    useEffect(() => {
        listarProdutos();
    }, [])

    return (
        <Container>
            <Content>
                {
                    produtos.map(e => (
                        <>
                            <Card
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                price={e.price}
                                image={e.image}
                                button={ButtonAction(e.id)}
                            /> 
                        </>
                        )
                    )
                }                
            </Content>
        </Container>
    )
}

export default Produtos;