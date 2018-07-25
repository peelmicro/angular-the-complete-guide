import { Effect, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import * as RecipeActions from './recipe.actions'
import * as fromRecipe from './recipe.reducers'
import { Recipe } from "../recipe.model";

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(
      switchMap(() => {
      return this.httpClient.get<Recipe[]>(
        'https://ng-recipe-book-cc043.firebaseio.com/recipes.json'
        )
    }),
     map(
      (recipes) => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    ));   

    @Effect({dispatch: false})
    recipeStore = this.actions$
      .ofType(RecipeActions.STORE_RECIPES)
      .pipe(withLatestFrom(this.store.select('recipes')),
       switchMap(([action, state]) => {
        return this.httpClient.put(
          'https://ng-recipe-book-cc043.firebaseio.com/recipes.json',
          state.recipes
        )
      }));
  

    constructor(
      private actions$: Actions,
      private httpClient: HttpClient,
      private store: Store<fromRecipe.FeatureState>
     ) {}    
}