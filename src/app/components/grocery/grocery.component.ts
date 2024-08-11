import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectGroceries, selectGrocetyByType } from '../../store/selectors/grocery.selectors';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {
  
  groceries$?:Observable<Grocery[]>;
  filteredGroceries$?:Observable<Grocery[]>;

  constructor(private store: Store<{groceries:Grocery[]}>){
    
    // if you are not using selectros
    // this.groceries$ = store.select("groceries"); 
    
    this.groceries$ = store.select(selectGroceries);

    // if you want to transform or filter the list use below
    // this.groceries$ = store.select(selectGrocetyByType);
    
  }

  onTypeChange(event: Event){
    const selectedType = (event.target as HTMLSelectElement).value;
    if(selectedType) this.filteredGroceries$ = this.store.select(selectGrocetyByType(selectedType))
      else this.filteredGroceries$ = undefined;
    
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    // this.store.dispatch({type:"Update",payload:payload});
    this.store.dispatch(addToBucket({payload}));
  }

  decrement(item:Grocery){
    const payload = {
      id:item.id
    }
    this.store.dispatch(removeFromBucket({payload}));
  }

}
