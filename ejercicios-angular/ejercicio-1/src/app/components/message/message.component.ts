import { Component } from '@angular/core';

@Component({
  templateUrl: './message.component.html',
  styles: [
  ]
})
  
export class MessageComponent {

  public isShown: boolean = false

  showMessage() {
    this.isShown = !this.isShown
  }


}
