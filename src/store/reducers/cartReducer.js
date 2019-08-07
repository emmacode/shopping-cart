import Image1 from "../../images/image1.jpg";
import Image2 from "../../images/image2.jpg";
import Image3 from "../../images/image3.jpg";
import Image4 from "../../images/image4.jpg";
import Image5 from "../../images/image5.jpg";
import Image6 from "../../images/image6.jpg";

import * as actionTypes from "../actions/ActionsTypes";

const initialState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Image1
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Image2
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Image3
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Image4
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Image5
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Image6
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let addedItem1 = state.items.find(item => item.id === action.id);
      let existed_item = state.addedItems.find(item => action.id === item.id);
      if (existed_item) {
        addedItem1.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem1.price
        };
      } else {
        addedItem1.quantity = 1;
        //calculating new total
        let newTotal1 = state.total + addedItem1.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem1],
          total: newTotal1
        };
      }

    case actionTypes.REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(item => item.id === action.id);
      let new_items1 = state.addedItems.filter(item => item.id !== action.id);
      //calculating total if an is removed
      let newTotal2 = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items1,
        total: newTotal2
      };

    case actionTypes.ADD_QUANTITY:
      let addedItem2 = state.items.find(item => item.id === action.id);
      addedItem2.quantity += 1;
      let newTotal3 = state.total + addedItem2.price;
      return {
        ...state,
        total: newTotal3
      };

    case actionTypes.SUB_QUANTITY:
      let addedItem3 = state.items.find(item => item.id === action.id);
      //if qnt is 0 then should be removed
      if (addedItem3.quantity === 1) {
        let new_items2 = state.addedItems.filter(item => item.id !== action.id);
        let newTotal4 = state.total - addedItem3.price;
        return {
          ...state,
          addedItems: new_items2,
          total: newTotal4
        };
      } else {
        addedItem3.quantity -= 1;
        let newTotal4 = state.total - addedItem3.price;
        return {
          ...state,
          total: newTotal4
        };
      }

    case actionTypes.ADD_SHIPPING:
      return {
        ...state,
        total: state.total + 6
      };

    case actionTypes.SUB_SHIPPING:
      return {
        ...state,
        total: state.total - 6
      };

    default:
      return state;
  }
};

export default cartReducer;
