import {Component, OnInit} from '@angular/core';
import {User} from "./models/user";
import {AuthenticationService} from "./services/authentication.service";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentUser: User;
  public language: String = 'EN';

  constructor(private authenticationService: AuthenticationService,
              private translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'iw']);
    translate.setDefaultLang('en-US');
    translate.use('en-US');
  }

  changeLanguage(language){
    this.language = language;
    console.log(language);
    if (language=='EN') this.translate.use('en-US');
    else if (language=='RU') this.translate.use('ru-RUS');
    else if (language=='IW') this.translate.use('iw-HEB');
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue;
  }

}
