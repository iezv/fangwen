import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from "../../services/authentication.service";
import { first } from 'rxjs/operators';
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  loading = false;
  error = '';
  @Input() curentUser: User;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute) {
  }

  buildFormLogin() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.buildFormLogin();
    this.authenticationService.logout();
    this.curentUser = this.authenticationService.currentUserValue;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginCheck(post) {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authenticationService.login(post.email.trim(), post.password.trim()).pipe(first())
        .subscribe(
          data => {
            location.replace(this.returnUrl);
          },
          error => {
            this.error = error;
            this.loading = false;
          });
    }
  }
}
