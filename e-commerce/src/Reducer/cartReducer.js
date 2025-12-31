export const cartReducer = (state, { type, payload }) => {
  switch (type) {

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload),
      };

    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, payload],
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter(item => item.id !== payload),
      };

    default:
      return state;
  }
};
