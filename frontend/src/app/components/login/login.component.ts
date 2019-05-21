import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  buildFormLogin() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.buildFormLogin();
  }

  loginCheck(post) {
    console.log(post)
    if (post.email.trim()==="admin" && post.password.trim()==="admin")  {
         this.router.navigate(['/home']);
    }
  }

}
