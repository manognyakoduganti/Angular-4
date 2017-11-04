import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header_selected: string;

  getClicked(clicked_value: string) {
    console.log('clicked value ', clicked_value);
    this.header_selected = clicked_value;
  }
}
