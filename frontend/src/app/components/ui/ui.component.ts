import {Component, Input} from '@angular/core';
import {User} from "../../models/user";


@Component({
  selector: 'app-ui-view',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UIComponent{
  @Input() curentUser: User;

}
