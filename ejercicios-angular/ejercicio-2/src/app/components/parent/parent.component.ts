import { Component, Input } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
  
export class ParentComponent {
  
  constructor(private communication: CommunicationService) { }

  // Usando servicio 

  
  notifyService() {
    this.communication.childMessage = "Parent Using Service"
    console.log("parent")
  }
  
  get serviceMessage() {
    return this.communication.parentMessage
  }

  // Usando Input 

  @Input()
  

}
