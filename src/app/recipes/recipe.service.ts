
import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[]= [new Recipe('Samosa',
    'how to make tasty samosa',
    'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/06/07214710/mutton-mince-samosa-600x369.jpg?resize=600%2C369',
    [
      new Ingredient('potato',1),
      new Ingredient('onions',2)
    ]),
    new Recipe('Samosa2',
      'extra tasty samosa',
      'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/06/07214710/mutton-mince-samosa-600x369.jpg?resize=600%2C369',
      [
        new Ingredient('potato',1),
        new Ingredient('onions',2)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private shoppingService: ShoppingListService){};

  AddIngToShoppingList(ingredients: Ingredient[]) {
this.shoppingService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
}
}
