import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';
import { AuthService } from '../../services/auth.service';
import { PasswordModule } from 'primeng/password';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {

  public registerForm?: FormGroup

  private _unsubscribe$ = new Subject<boolean>

  constructor(
    private _formService: FormService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this._formService.createRegistrationForm();
  }

  onRegister() {

    if (this.registerForm) {
      const name = this.registerForm.get('name')?.value
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;

      console.log(name, email, password);

      if (this.registerForm.valid) {
        this._authService
          .register(name, email, password)
          .pipe(takeUntil(this._unsubscribe$))
          .subscribe(() => this._router.navigate(['/auth/login']));
      } else {
        console.log('error');
      }
    }

  }
}
