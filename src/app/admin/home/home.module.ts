import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild( [{path: '', component: HomeComponent, pathMatch: 'full'}])
  ],
})
export class HomeModule { }
