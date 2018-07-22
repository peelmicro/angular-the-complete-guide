import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownDirective } from "./dropdown.directive";

@NgModule( {
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule, // In this case it has to be exported not imported
    DropdownDirective // export must be included when the declarations are used in serveral places
  ]
})
export class SharedModule {}