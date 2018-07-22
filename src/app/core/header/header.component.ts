import { Component } from "@angular/core";
// import { HttpEvent, HttpEventType } from "@angular/common/http";

import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipies();
  }

  onLogout() {
    this.authService.logout();
  }
  
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }  
}