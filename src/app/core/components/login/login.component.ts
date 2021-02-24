import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticationService } from '../../providers/authentication.service';
// import { HttpDataService } from '../../providers/http-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  allUsers: User[];
  constructor(
    private formBuilder:FormBuilder,
    public authService: AuthenticationService,
    public router: Router
    ) {
   }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      mail: ['', [Validators.required]],
      password : ['', [Validators.required]]
    });
  }
  
  login(){
    console.log("ENTRA :");
  }

  onSubmit(){
    const usermail = this.userForm.controls.mail.value;
    const password = this.userForm.controls.password.value;
    this.authService.login(usermail, password).subscribe(
      (result) => {
        this.router.navigate(['/admin'])
      
      
    },
    (e) => console.log("no se loguea"),
    () => console.log("acaba el proceso")
    )
    console.log("form: ", this.userForm);
    
  }

}
