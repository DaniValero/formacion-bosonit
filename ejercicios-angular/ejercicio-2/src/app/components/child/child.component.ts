import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent {
  public message: string = '';

  constructor(private communication: CommunicationService) {}

  // Usando servicio
  notifyService() {
    this.communication.parentMessage = 'Child Using Service';
    console.log(this.communication.parentMessage);
  }

  get serviceMessage() {
    return this.communication.childMessage;
  }

  // Usando Input

  @Input()
  public inputMessage: string = '';

  @Output()
  public onValue = new EventEmitter<string>();


  useOutput() {
    this.onValue.emit("Child using Output Property")
  }

}
