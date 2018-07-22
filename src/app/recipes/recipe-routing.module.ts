import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from '../auth/auth-guard.service';

const recipeRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes) // It is only forRoot in the app-routing.modul
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { 

}