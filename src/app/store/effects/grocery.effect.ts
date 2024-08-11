import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../grocery.service';
import { groceryActions } from '../actions/grocery.action';

@Injectable()
export class GroceriesEffects {

  loadGroceries$ = createEffect(() => this.actions$.pipe(
    ofType(groceryActions.loadGroceries),
    exhaustMap(() => this.groceryService.fetchAllGroceries()
      .pipe(
        map((groceries:any) => (groceryActions.loadGroceriesSuccess({payload: groceries}))),
        catchError(() => of(groceryActions.loadGroceriesFailed))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private groceryService: GroceryService
  ) {}
}