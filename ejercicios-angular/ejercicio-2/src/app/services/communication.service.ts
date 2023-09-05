import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public parentMessage: string = ""

  public childMessage: string = ""

}
