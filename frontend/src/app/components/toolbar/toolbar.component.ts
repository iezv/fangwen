import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolBarComponent {
  @Input() curentUser: User;
  @Input() language: string;
  @Output() changeLanguage: EventEmitter<any> = new EventEmitter<any>();


  constructor(public translate: TranslateService) {
  }

  logOut(){
    this.curentUser = null;
  }

  public setLanguage = (language) => {
    if (this.language === language) return;
    this.language = language;
    this.changeLanguage.emit(language);
  }

}
