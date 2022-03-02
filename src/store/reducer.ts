import * as actionTypes from './actionTypes';
import { ItemState, ItemAction, IItem } from '../types';

const initialState: ItemState = {
  items: []
};

const reducer = (
  state: ItemState = initialState,
  action: ItemAction
): ItemState => {
  console.log('action.type', action.type);
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newItem: IItem = {
        id: action.item.id,
        title: action.item.title,
        price: action.item.price,
        image: action.item.image
      };
      return {
        ...state,
        items: state.items.concat(newItem)
      };
    case actionTypes.REMOVE_ITEM:
      const updatedItems: IItem[] = state.items.filter(
        (items) => items.id !== action.item.id
      );
      return {
        ...state,
        items: updatedItems
      };
  }
  return state;
};

export default reducer;
