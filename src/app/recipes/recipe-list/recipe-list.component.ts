import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2017/09/08/13/16/recipe-2728726_960_720.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2017/09/08/13/16/recipe-2728726_960_720.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
