import { ADDTOCART , DELETEFROMCART} from './type';

const INITIAL_STATE={
    cart:[],
}
export default function PanierReducer(state=INITIAL_STATE,action){
    switch (action.type){
        case ADDTOCART:
            return {...state,cart: [...state.cart, action.payload]}
        case DELETEFROMCART :
            return{...state,cart:state.cart.filter((cart)=>cart.id!==action.payload)};
        default :
            return state;
    }
}