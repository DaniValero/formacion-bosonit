import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = "dani"
  public nameUpper: string = "DANI"
  public fullName: string = "DaNI"
  public customDate: Date = new Date();

}
