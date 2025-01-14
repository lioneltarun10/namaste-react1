import { createSlice, current } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        // mutating the state here
        addItem:(state,action) => {

            // Vanilla(older) Redux => DON'T MUTATE STATE, returning was mandatory
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState;

            // REDUX TOOLKIT (uses IMMER behind the scenes)
            // WE HAVE TO MUTATE THE STATE
             state.items.push(action.payload)
        },
        removeItem :(state) => {
            state.items.pop()
        },
        clearCart:(state) => {

            // console.log(state);
            // console.log(current(state));
            // state = []
            // console.log(state);
        
            // RTK -> either mutate the state or return a new state
            //  state.items.length = 0
            return { items:[]}
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer;