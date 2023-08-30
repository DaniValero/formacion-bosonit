import { Component } from '@angular/core';
import { Observable, interval, tap } from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select 

  public name: string = "Dani"
  public gender: "male" | "female" = "male"
  public saludoMap = {
    male: "encantado",
    female: "encantada"
  }

  changeClient(): void {
    this.name = "Melissa"
    this.gender = "female"
  }

  // i18n Plural

  public clients: string[] = ["María", "Pedro", "Eduardo", "Ana", "José"]
  public clientsMap = {
    "=0": "no hay clientes esperando",
    "=1": "tenemos un cliente esperando",
    "=2": "tenemos 2 clientes esperando",
    "other": "tenemos # clientes esperando"
  }

  deleteClient(): void {
    this.clients.shift()
  }


  // KeyValue pipe

  public person = {
    name: "Fernando",
    age: 36,

  }

  //Async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log(value))
  )

  public promiseValue: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("Tenemos datos en la promesa")
  }, 3500)
  })

}
