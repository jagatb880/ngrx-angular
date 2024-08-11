import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


// export const selectGroceries = (state: {groceries: Grocery[]})=>state.groceries;
// alternate way is below one
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGrocetyByType = (type:string)=> createSelector(
    selectGroceries,
    (state)=> state.filter(item=>item.type == type)
)