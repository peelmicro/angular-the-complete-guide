import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedfeature = 'recipe';

  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyDSp_ITM9LjcxV7xtZcoF2qSmbfxO0vJHM",
      authDomain: "ng-recipe-book-cc043.firebaseapp.com"
    };
    firebase.initializeApp(config);    
  }  
  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}
