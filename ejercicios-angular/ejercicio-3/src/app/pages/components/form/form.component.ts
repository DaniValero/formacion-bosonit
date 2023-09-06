import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/interfaces/countries.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'crud-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent implements OnInit {
  public countries: Country[] = [];

  public myForm: FormGroup = this.fb.group({
    id: [''],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    hasNotifications: [''],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  get currentUser() {
    return this.myForm.value;
  }

  ngOnInit(): void {
    this.dataService
      .getCountries()
      .subscribe((country) => (this.countries = country));
  }

  onSubmit() {
    if (this.myForm.invalid) return;

    this.dataService.createUser(this.currentUser).subscribe(),
      window.location.reload();
  }
}
