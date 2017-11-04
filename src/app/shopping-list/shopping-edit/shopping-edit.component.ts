import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') NameInput: ElementRef;
  @ViewChild('amountInput') AmountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  AddItems() {
    const newIng = new Ingredient(this.NameInput.nativeElement.value, this.AmountInput.nativeElement.value);
    this.ingredientAdded.emit(newIng);
  }
}
