import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";


//Add action in Bucket State
export const addToBucket = createAction(
    '[Bucket] Add',
    props<{payload: Bucket}>()
)

//Add remove in Bucket State
export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<{payload: Partial<Bucket>}>()
)