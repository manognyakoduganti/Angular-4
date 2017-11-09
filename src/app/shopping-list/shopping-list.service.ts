import {Ingredient} from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
ingredientsChanged = new Subject<Ingredient[]>();
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
   this.ingredientsChanged.next(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.next(this.ingredients.slice());
}
}
