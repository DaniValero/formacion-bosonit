import { Component, EventEmitter, Output } from '@angular/core';
import { TrafficService } from 'src/app/services/traffic.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styles: [],
})
export class ControllerComponent {
  public colors: string[] = ['red', 'yellow', 'green'];

  public color: string =""

  constructor(private trafficService: TrafficService) {
  }

  onToggle() {
    this.trafficService.isLightOn = !this.trafficService.isLightOn;
    if (this.trafficService.isLightOn) {
      this.trafficService.sendColor("red")
    } else {
      this.trafficService.sendColor("light-off")
    }
  }

  onSelect(event: Event) {
    if (!this.trafficService.isLightOn) return;

    this.color = (event.target as HTMLInputElement).value

    this.trafficService.sendColor(this.color)
    
  }

}
