import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  startedEditing = new Subject<number>();
ingredientsChanged = new Subject<Ingredient[]>();
  updatedIng: Ingredient;
 private ingredients: Ingredient[]= [
    new Ingredient('Potatoes', 5),
    new Ingredient('Onions', 2)
  ];

 getIngredients() {
   return this.ingredients.slice();
 }

 getIngredient(index: number) {
   return this.ingredients[index];
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

updateIngredient(index: number, newIng: Ingredient) {
this.ingredients[index] = newIng;
this.ingredientsChanged.next(this.ingredients.slice());
}

deleteIngredient(index: number) {
   this.ingredients.splice(index, 1);
   this.ingredientsChanged.next(this.ingredients.slice());
}

}
