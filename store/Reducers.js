import ACTIONS from "./Actions";

const reducers = (state, action) => {
   switch (action.type) {
      case ACTIONS.NOTIFY:
         return {
            ...state,
            notify: action.payload,
         };
      case ACTIONS.AUTH:
         return {
            ...state,
            auth: action.payload,
         };
      case ACTIONS.TO_CART:
         return {
            ...state,
            cart: action.payload,
         };
      case ACTIONS.SUBJECT:
         return {
            ...state,
            subject: action.payload,
         };
      default:
         return state;
   }
};

export default reducers