import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  buildFormLogin() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.buildFormLogin();
  }

  registerSubmit(post) {
    console.log(post)
    if (post.email.trim()==="admin" && post.password.trim()==="admin")  {
         this.router.navigate(['/home']);
    }
  }

}
