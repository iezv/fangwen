import {Component} from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  element = 'dashboard';

  public  chooseEl = (element: string) => {
    if (this.element === element) return;
    this.element = element;
  }

}
