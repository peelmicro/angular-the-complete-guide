import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AuthGuard } from "../auth/auth-guard.service";

@NgModule( {
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule, // This is mandatory for all the modules --> In app.module the BrowseModule contains it, so it doesn't need it
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ],
  providers: [AuthGuard],
})
export class RecipesModule {
  
}