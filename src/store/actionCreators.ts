import * as actionTypes from "./actionTypes";
import { ItemAction, IItem, DispatchType } from '../types';

export function removeItem(item: IItem) {
  const action: ItemAction = {
    type: actionTypes.REMOVE_ITEM,
    item,
  };

  return simulateHttpRequest(action);
}

export function addItem(item: IItem) {
  const action: ItemAction = {
    type: actionTypes.ADD_ITEM,
    item,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ItemAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500);
  };
}
