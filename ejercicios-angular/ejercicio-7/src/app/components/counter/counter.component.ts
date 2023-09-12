import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
  }

  private counterSubscription?: Subscription 
  
  public value: number = 0

  public countUp: boolean = true

  public step: number = 1



  onStart(currentCount: number) {
    this.counterSubscription = interval(500).subscribe((count) => {
     
      if (this.countUp === false) {
        this.value = currentCount - count * this.step;
      } else {
        this.value = currentCount + count * this.step
      }
    })
  }

  onPause(value: number) { 
    console.log(value)
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe()
    }
  }

  onReset() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe()
    }
    this.value = 0
  }

  onCountUp(currentCount: number) {
    this.countUp = true
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    this.onStart(currentCount);
  }


  onCountDown(currentCount: number) {
    this.countUp = false
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    

    this.onStart(currentCount);

  }

  setValue(event: Event, currentCount: number) {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    this.value = parseInt((event.target as HTMLInputElement).value)
    this.onStart(currentCount);
  }

  setStep(event: Event, currentCount: number) {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    this.step = parseInt((event.target as HTMLInputElement).value);
    this.onStart(currentCount);
  }

}
