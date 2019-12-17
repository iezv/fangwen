import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    @Input() curentUser: User;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.curentUser = this.authenticationService.currentUserValue;
  }

}
