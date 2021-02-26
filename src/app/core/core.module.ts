import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthenticationService } from 'src/app/core/providers/authentication.service';
import { HttpDataService } from 'src/app/core/providers/http-data.service';
import { PathParseService } from 'src/app/core/providers/path-parse.service';


@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthenticationService, HttpDataService, PathParseService ]
})
export class CoreModule { }
