import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {User} from 'src/app/core/models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backofficev1';
  allUsers: User[] = [];
  constructor(private translate: TranslateService){
     translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
  }

  // getDataApi(){
  //   this.httpService.getTest().subscribe((result: User[])=>{
  //     console.log("dataApi :", result);
  //     this.allUsers = result;

  //   })
  // }
}
