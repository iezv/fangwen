import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public newUser: User = new User();
  returnUrl: string;
  loading = false;
  error = '';
  @Input() curentUser: User;


  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute){
  }

  buildFormRegister() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      subscribe: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.buildFormRegister();
    this.authenticationService.logout();
    this.curentUser = this.authenticationService.currentUserValue;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  registerSubmit(post) {
    if (this.registerForm.valid) {
      this.newUser.firstName = post.firstName.trim();
      this.newUser.lastName = post.lastName.trim();
      this.newUser.email = post.email.trim();
      this.newUser.password = post.password.trim();
      this.newUser.phone = post.phone.trim();
      this.newUser.subscribe = post.subscribe==true ? true : false;
      this.userService.addNewUser(this.newUser as User).subscribe(data => {
        if (data)  {
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
      });
      }
      this.buildFormRegister();
    }
}
