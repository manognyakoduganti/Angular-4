/**
 * Created by manognyakoduganti on 11/2/17.
 */

import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() getHeader = new EventEmitter<string>();

  loadRecipes() {
    this.getHeader.emit('recipe');
  }
  loadShppingList() {
    this.getHeader.emit('slist');
  }
}
