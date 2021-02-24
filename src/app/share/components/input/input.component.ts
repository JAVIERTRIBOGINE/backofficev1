import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
 @Input() formControlName;
 @Input() label;
 @Input() placeholder;
 @Input() type;
 @Input() disabled;
 @Input() readOnly;

  constructor() { }

  ngOnInit() {
  }

  updateValue(){}
  keyPress(event){}
  changeFocus(){}
}
