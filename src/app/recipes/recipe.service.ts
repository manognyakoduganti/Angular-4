
import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  AddIngToShoppingList(ingredients: Ingredient[]){
this.shoppingService.addIngredients(ingredients);
  }
}
