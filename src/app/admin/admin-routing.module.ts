import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent} from 'src/app/core/components/error/error.component';
import { LoginComponent} from 'src/app/core/components/login/login.component';
import { AdminComponent } from './admin.component';
// import { ShareModule } from 'src/app/share/share.module'
const routes: Routes = [
  { path: '', component: AdminComponent,
  children: [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module') .then(m => m.HomeModule)},
  { path: 'header', loadChildren: () => import('./header/header.module') .then(m => m.HeaderModule) },
  { path: '**', redirectTo: 'home' }

  ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
