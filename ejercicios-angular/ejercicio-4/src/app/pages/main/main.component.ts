import { University } from './../../interfaces/university.interface';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Country } from 'src/app/interfaces/country.type';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent {
  
  public countries: Country[] = ['Spain', 'United Kingdom', 'Portugal'];

  public selectedCountry: Country = "Spain"

  public universities: University[] = []
  
  @Input()
  public searchTerm: string = ""

  public myForm: FormGroup = this.fb.group({
    searchTerm: [''],
  });

  constructor(private fb: FormBuilder, private searchService: SearchService) { }
  

  searchUniversitiesByCountry(country: Country) {
    this.selectedCountry = country;

    this.searchService.getUniversitiesByCountry(country).subscribe((university) => {
      this.universities = university
    });
  }

  searchUniversitiesByName(searchTerm: string) {
    this.searchService.searchUniversitiesByName(searchTerm).subscribe((university) => {
      this.universities = university
    })
  }



}
