import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpDataService } from './core/providers/http-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backofficev1';
  dataApi: string = "";
  constructor(private translate: TranslateService, private httpService: HttpDataService){
     translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
  }

  getDataApi(){
    this.httpService.getTest().subscribe(result=>{
      console.log("dataApi :", result);
      this.dataApi += result;

    })
  }
}
