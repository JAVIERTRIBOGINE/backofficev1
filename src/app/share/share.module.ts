import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateCompetitionComponent, InputComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    CreateCompetitionComponent, InputComponent, FormsModule, ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ShareModule { }
