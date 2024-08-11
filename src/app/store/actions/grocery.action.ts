import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";



// export const initGroceries = createAction('[Grocery] Load groceries');

// export const completedGroceries = createAction('[Grocery] Load groceries success');

// instead of above 2 line, you can create a action group

export const groceryActions = createActionGroup({
    source: "Grocery API",
    events:{
        'Load groceries':emptyProps(),
        'Load groceries success':props<{payload:Grocery[]}>(),
        'Load groceries failed':emptyProps(),
    }
})