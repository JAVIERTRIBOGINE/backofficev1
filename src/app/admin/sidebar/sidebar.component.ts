import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/providers/authentication.service';

declare const $: any;
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  hidden: boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/home', title: 'HEADER.HOME', icon: '', class: '', hidden: true },
  { path: '/admin/users-roles', title: 'HEADER.USERS', icon: 'pe-7s-user', class: '', hidden: false },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  noCollapsed: boolean = true;
  constructor(private authService: AuthenticationService, private router: Router) {  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ((window).outerWidth > 991) {
      return false;
    }
    return true;
  }

  logout = () => {
  //   sessionStorage.clear();
  //   this.authService.logOut();
  }

  home() {
    this.router.navigate(['admin/home'])
  }
}
