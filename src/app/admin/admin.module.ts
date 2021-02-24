import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {NavbarModule} from './navbar/navbar.module';
// import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    NavbarModule,
    // HomeModule
  ],
  exports: [SidebarModule]
})
export class AdminModule { }
