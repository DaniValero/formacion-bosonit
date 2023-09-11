import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrafficService } from 'src/app/services/traffic.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
})
export class TrafficLightComponent implements OnDestroy {
  public currentColor: string = ""
  private subscription: Subscription

  constructor(private trafficService: TrafficService) {
    this.subscription = this.trafficService
      .getColor()
      .subscribe((data) => (this.currentColor = data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
