import * as Types from "./ActionsTypes";

//add cart action
export const addToCart = id => {
  return {
    type: Types.ADD_TO_CART,
    id
  };
};

//remove cart action
export const removeItem = id => {
  return {
    type: Types.REMOVE_ITEM,
    id
  };
};

//subtract qnt action
export const subtractQuantity = id => {
  return {
    type: Types.SUB_QUANTITY,
    id
  };
};

//add qnt action
export const addQuantity = id => {
  return {
    type: Types.ADD_QUANTITY,
    id
  };
};

export const addShipping = () => {
  return {
    type: Types.ADD_SHIPPING
  };
};

export const subtractShipping = () => {
  return {
    type: Types.SUB_SHIPPING
  };
};
