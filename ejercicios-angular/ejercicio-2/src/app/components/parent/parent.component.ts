import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CommunicationService } from 'src/app/services/communication.service';
import { ObservablesService } from 'src/app/services/observables.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [],
})
export class ParentComponent{
  constructor(
    private communication: CommunicationService,
    private observableService: ObservablesService
  ) {}

  public inputMessage: string = '';

  public message: string = '';

  // Usando servicio

  notifyService() {
    this.communication.childMessage = 'Parent Using Service';
  }

  get serviceMessage() {
    return this.communication.parentMessage
  }

  // Usando Input

  useInput() {
    this.inputMessage = 'Parent Using Input Property';
  }

  getOutput(message: string) {
    this.message = message;
  }

  //Observables

  get observableMessage() {
    return this.observableService.childInfo
  }

  onUseObservable() {
    this.observableService.onParentUsingObservable("Parent using observable").subscribe((args) => {
      this.observableService.parentInfo = args
    })
  }



}
