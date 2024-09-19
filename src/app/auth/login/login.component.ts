import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService  =  inject(AuthService);
  router  =  inject(Router);

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  onSubmit(){
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      // this.authService.login(this.loginForm.value)
      // .subscribe((data: any) => {
      //   if(this.authService.isLoggedIn()){
      //     this.router.navigate(['/admin']);
      //   }
      //   console.log(data);
      // });
    }
  }
}
