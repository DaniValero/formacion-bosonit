import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FormService } from 'src/app/shared/services/form.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  public loginForm?: FormGroup;

  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _formService: FormService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true),
    this._unsubscribe$.complete()
  }

  ngOnInit(): void {
    this.loginForm = this._formService.createLoginForm()
  }
  

  onLogin() {

    if (this.loginForm) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      if (this.loginForm.valid) {
        this._authService
          .login(email, password)
          .pipe(takeUntil(this._unsubscribe$))
          .subscribe(() => this._router.navigate(['/movies/popular']));
      } else {
        console.log('error');
      }
    }

  }
}
