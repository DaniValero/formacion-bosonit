import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';
import { AuthService } from '../../services/auth.service';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {

  public registerForm?: FormGroup

  constructor(
    private _formService: FormService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this._formService.createRegistrationForm();
  }

  onRegister() {

    const name = this.registerForm?.value.name
    const email = this.registerForm?.value.email
    const password = this.registerForm?.value.PasswordModule


    if (this.registerForm!.valid) {
      this._authService.register(name, email, password)
    } else {
      console.error("Ey")
    }


  }
}
