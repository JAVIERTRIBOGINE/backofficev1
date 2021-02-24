import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
// import 'rxjs/add/operator/filter';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
// import PerfectScrollbar from 'perfect-scrollbar';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {
  elemMainPanel: HTMLElement;
  elemSidebar: HTMLElement;
  // routerSubscription: Subscription;
  lastPoppedUrl: string;
  yScrollStack: number[] = [];
  noCollapsed: boolean = true;
  @ViewChild('desktopSidebar', {static: false}) sidebar: SidebarComponent;
  @ViewChild('containerSidebar', {static: false}) containerSidebar: ElementRef;
  @ViewChild('elemMainPanel', {static: false})  elementMainPanel: ElementRef;

  constructor(public location: Location, private router: Router) { }

  ngOnInit() {
    console.log("ROUTER:",this.router);
    const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    // if (isWindows) {
    //   // if we are on windows OS we activate the perfectScrollbar function

    //   document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    // } else {
    //   document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
    // }
    this.elemMainPanel = document.querySelector('.main-panel') as HTMLElement;
    this.elemSidebar = document.querySelector('.sidebar .sidebar-wrapper') as HTMLElement;

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    // this.router.events.subscribe((event: any) => {
    //   if (event instanceof NavigationStart) {
    //     if (event.url !== this.lastPoppedUrl) {
    //       this.yScrollStack.push(window.scrollY);
    //     }
    //   } else if (event instanceof NavigationEnd) {
    //     if (event.url === this.lastPoppedUrl) {
    //       this.lastPoppedUrl = undefined;
    //       window.scrollTo(0, this.yScrollStack.pop());
    //     } else {
    //       window.scrollTo(0, 0);
    //     }
    //   }
    // });
    // this.routerSubscription = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //   this.elemMainPanel.scrollTop = 0;
    //   this.elemSidebar.scrollTop = 0;
    // });
    // if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
    //   let ps = new PerfectScrollbar(this.elemMainPanel);
    //   ps.update();
    // }
  }
  ngAfterViewInit() {
    // this.runOnRouteChange();
  }
  isMap(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path === titlee) {
      return false;
    } else {
      return true;
    }
  }
  // runOnRouteChange(): void {
  //   if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
  //     const ps = new PerfectScrollbar(this.elemMainPanel);
  //     ps.update();
  //   }
  // }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }

  deskTopSidebarToggle(){
    if (this.noCollapsed === true) {
      console.log("entra en true");
      this.containerSidebar.nativeElement.classList.add('collapsed');
      this.elementMainPanel.nativeElement.classList.add('width-expanded');
    } else {
      console.log("entra en false");
      this.containerSidebar.nativeElement.classList.remove('collapsed');
      this.elementMainPanel.nativeElement.classList.remove('width-expanded');
    }
    this.noCollapsed = this.sidebar.noCollapsed = !this.noCollapsed;
    console.log("componente sidebar : ", this.sidebar);
  }

  isMobileMenu() {
    if (window.matchMedia(`(min-width: 991px)`).matches) { 
      return false;
    }
    return true;
  }

}
