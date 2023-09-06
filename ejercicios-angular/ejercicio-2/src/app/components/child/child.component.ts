import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ObservablesService } from 'src/app/services/observables.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent {

  @Input()
  public message: string = '';

  constructor(
    private communication: CommunicationService,
    private observableService: ObservablesService
  ) { }

  // Usando servicio
  notifyService() {
    this.communication.parentMessage = 'Child Using Service';
  }

  get serviceMessage() {
    return this.communication.childMessage;
  }

  // Usando Input y Output

  @Input()
  public inputMessage: string = '';

  @Output()
  public outputMessageEvent = new EventEmitter<string>();

  useOutput() {
    this.outputMessageEvent.emit('Child using Output Property');
  }

  //Observables

  onUseObservable(){
    this.observableService.onChildUsingObservable("Child using observable").subscribe((args) => {
      this.observableService.childInfo = args
    })
  }

  get observableMessage() {
    return this.observableService.parentInfo
  }

  

}
