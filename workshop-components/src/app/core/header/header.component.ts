import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
