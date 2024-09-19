import { User } from './../../models/User';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  private authService  =  inject(AuthService);
  private fb = inject(FormBuilder)

  protected signupForm!: FormGroup;


  ngOnInit() {
    this.signupForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      categoria: [1, [Validators.required]],
      turma: ['', [Validators.required]]
    })
  }


  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value)

      this.authService.signUp(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('Cadastro realizado com sucesso!', response);
        },
        error: (err) => {
          console.error('Erro ao realizar o cadastro:', err);
        },
        complete: () => {
          console.log('Processo de cadastro completo.');
        }
      });
    } else {
      console.error('Formulário inválido');
      console.log(this.signupForm.value)

    }
  }

}
