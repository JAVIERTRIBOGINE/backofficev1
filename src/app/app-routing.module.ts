import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent} from 'src/app/core/components/error/error.component';
import { AppComponent } from './app.component';
import { SignedGuard } from './core/guard/signed.guard';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { 
        path: 'login', 
        loadChildren: () => import('./core/components/login/login.module') .then(m => m.LoginModule)
        // canActivate: [SignedGuard]
      },
      { path: 'error', component: ErrorComponent },
      { path: 'admin', loadChildren: () => import('./admin/admin.module') .then(m => m.AdminModule), canActivate: [SignedGuard]},
      { path: '**', redirectTo: 'admin'}
    ]
  }
 
  // { path: 'admin', loadChildren: './admin/admin.module#LayoutModule', canActivate: [MsalGuard, SignedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
