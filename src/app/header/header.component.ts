import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";

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
      (response: Response) => console.log(response),
      (error: Response) => console.log(error)
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipies();
  }

  onLogout() {
    this.authService.logout();
  }
}