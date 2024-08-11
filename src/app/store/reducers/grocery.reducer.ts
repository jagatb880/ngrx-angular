import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { groceryActions } from "../actions/grocery.action";


// const initialState: Grocery[] = [
//     {"id":1,"name":"Apple","type":"fruit"},
//     {"id":2,"name":"Banana","type":"fruit"},
//     {"id":3,"name":"Lays Chips","type":"snacks"},
//     {"id":4,"name":"Mixture","type":"snacks"},
// ]

const initialState: Grocery[] = []

export const groceryReducer = createReducer(
    initialState,
    on(groceryActions.loadGroceriesSuccess,(state,action)=>{
        return action.payload
    }),
    on(groceryActions.loadGroceriesFailed,(state,action)=>{
        return []
    })
)