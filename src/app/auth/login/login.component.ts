import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
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
  private fb = inject(FormBuilder)

  protected loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    })
  }


  onSubmit(){
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value)
      .subscribe((data: any) => {
        // if(this.authService.isLoggedIn()){
        //   this.router.navigate(['/home']);
        // }
        console.log(data);
      });
    }
  }
}
