import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() sendSelectedRecipe = new EventEmitter<Recipe>();
recipes: Recipe[]= [
  new Recipe('Samosa', 'how to make tasty samosa', 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/06/07214710/mutton-mince-samosa-600x369.jpg?resize=600%2C369')
];

//@Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  selectedRecipe(srecipe: Recipe){
    console.log("in recipe list",srecipe);
    this.sendSelectedRecipe.emit(srecipe);

  }

}
