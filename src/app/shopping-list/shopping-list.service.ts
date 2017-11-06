import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
ingredientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[]= [
    new Ingredient('Potatoes', 5),
    new Ingredient('Onions', 2)
  ];

 getIngredients() {
   return this.ingredients.slice();
 }

 AddIngredient (ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   console.log('ingredient added:', ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.emit(this.ingredients.slice());
}
}
