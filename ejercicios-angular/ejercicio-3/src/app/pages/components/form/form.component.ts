import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { Country } from 'src/app/interfaces/countries.interface';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';
import { ValidatorService } from 'src/app/services/validator.service';

@Component({
  selector: 'crud-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit {
  public countries: Country[] = [];

  public myForm: FormGroup = this.fb.group(
    {
      id: [''],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      hasNotifications: [''],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.isFieldOneEqualFieldTwo('password', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private validatorService: ValidatorService
  ) {}

  get currentUser() {
    return this.myForm.value;
  }

  ngOnInit(): void {
    this.dataService
      .getCountries()
      .subscribe((country) => (this.countries = country));

    this.dataService.userChanged.subscribe((data: any) => {
      this.myForm.patchValue(data);
    });
  }

  onSubmit() {
    if (this.myForm.invalid) return;
    console.log(this.currentUser)
      this.dataService
        .createUser(this.currentUser)
        .subscribe(() => window.location.reload());
  
  }

  onUpdate() {
    this.dataService
      .editUser(this.myForm.value)
      .subscribe(() => window.location.reload());
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
  }
}
