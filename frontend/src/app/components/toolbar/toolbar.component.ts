import {Component, Input, SimpleChanges} from '@angular/core';
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolBarComponent {
  @Input() curentUser: User;

  logOn(){
    this.curentUser = null;
  }


}
