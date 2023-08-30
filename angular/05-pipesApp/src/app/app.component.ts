import { Component } from '@angular/core';
import  {PrimeNGConfig} from "primeng/api"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primeConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeConfig.ripple = true
  }

  public title = 'piPes aPP';
}
