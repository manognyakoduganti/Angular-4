import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD4ORlfHryVjwOdpLnLxWenF8kifLt_UJ8",
      authDomain: "foodapp-44c9c.firebaseapp.com"
    });

  }
}
