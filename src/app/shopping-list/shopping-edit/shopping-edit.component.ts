import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subs: Subscription;
  editMode= false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
   this.subs = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
this.editMode = true;
this.editedItemIndex = index;
this.editedItem = this.shoppingService.getIngredient(index);
this.slForm.setValue({
  name: this.editedItem.name,
  amount: this.editedItem.amount
});
        }
      );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  AddItems(form: NgForm) {
    const newIng = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIng);
    } else {
      this.shoppingService.AddIngredient(newIng);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
