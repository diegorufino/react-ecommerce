import React, {Dispatch} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import CardCart from "../../components/CardCart";
import { Container, Content } from "./styles";
import { IItem, ItemState } from "../../types";
import { ensure } from "../../utils";

type Props = {
    removeItem: (item: IItem) => void
}

const Carrinho: React.FC<Props> = ({ removeItem }) => {    
    const dispatch: Dispatch<any> = useDispatch();
    
    const items: readonly IItem[] = useSelector(
        (state: ItemState) => state.items,
        shallowEqual
      )

    const RemoveItem = (id: number) => {
        const itemRemove = ensure(items.find(i => i.id === id));
        deleteItem(itemRemove);
    }

    const deleteItem = React.useCallback(
        (item: IItem) => dispatch(removeItem(item)),
        [dispatch, removeItem]
    );

    const ButtonAction = (id: number) => {
        return (
            <button onClick={() => RemoveItem(id)}>
                { "Remover" }
            </button>
        )
    }

    return (
        <Container>
            <Content>
                {
                    items.map(e => (
                        <>
                            <CardCart
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                price={e.price}
                                image={e.image}
                                amount={1}
                                button={ButtonAction(e.id)}
                            />
                        </>
                        )
                    )
                }

                {/* {
                    console.log('State', items)
                } */}
                
            </Content>
        </Container>
    )
}

export default Carrinho;