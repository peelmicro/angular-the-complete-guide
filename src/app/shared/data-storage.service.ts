import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpRequest } from "@angular/common/http";
import 'rxjs/Rx'
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    // const token = this.authService.getToken();

    return this.httpClient.put(
      'https://ng-recipe-book-cc043.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
      // ,{
      //   params: new HttpParams().set('auth', token)
      // } 
    )
    // const req = new HttpRequest(
    //   'PUT',
    //   'https://ng-recipe-book-cc043.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(),
    //   {
    //     params: new HttpParams().set('auth', token)
    //   } 
    // )
    // return this.httpClient.request(req);
  }

  getRecipies() {
    // const token = this.authService.getToken();
    return this.httpClient.get<Recipe[]>(
      'https://ng-recipe-book-cc043.firebaseio.com/recipes.json'
      // ,
      // {
      //   params: new HttpParams().set('auth', token)
      // }       
      )
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )   
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}