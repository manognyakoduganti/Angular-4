import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]= [
  new Ingredient('Potatoes', 5),
  new Ingredient('Onions', 2)
];
  constructor() { }

  ngOnInit() {
  }
  AddIngredient(ingredient: Ingredient) {
this.ingredients.push(ingredient);
  }
}
