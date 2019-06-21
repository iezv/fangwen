import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "./models/user";
import {AuthenticationService} from "./services/authentication.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue;
  }

}
