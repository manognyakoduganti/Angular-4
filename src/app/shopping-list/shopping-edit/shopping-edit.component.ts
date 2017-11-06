import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') NameInput: ElementRef;
  @ViewChild('amountInput') AmountInput: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }
  AddItems() {
    const newIng = new Ingredient(this.NameInput.nativeElement.value, this.AmountInput.nativeElement.value);
    this.shoppingService.AddIngredient(newIng);
  }
}
