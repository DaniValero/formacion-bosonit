import { Component } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styles: [
  ]
})
export class ControllerComponent {

  public isLightOn: boolean = false


  onToggle() {
    this.isLightOn = !this.isLightOn
    console.log(this.isLightOn)
  }

  

}
