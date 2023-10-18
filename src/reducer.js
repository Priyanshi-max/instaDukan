// reducer is how data is dispached to the data-layer
export const initialState={
    basket:[],
    user:null
}
// Selector

export const basketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0)
const reducer=(state,action)=>{
    
    switch (action.type) {
        case "SHOP_NOW":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }


        case "REMOVE_ITEM":   
        const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
        let newBasket=[...state.basket];

        if(index>=0){
            newBasket.splice(index,1);
        }
        else{
            console.warn(`${action.id} item is not in your basket`)
        }
        return{
            ...state,
            basket:newBasket
        }

        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
}
export default reducer;