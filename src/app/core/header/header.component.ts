/**
 * Created by manognyakoduganti on 11/2/17.
 */

import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dsService: DataStorageService, private authService: AuthService) {}

  onSaveData() {
this.dsService.storeRecipes().subscribe(
  (response: Response) => {
    console.log(response);
  });
  }

  onFetchData() {
    this.dsService.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
