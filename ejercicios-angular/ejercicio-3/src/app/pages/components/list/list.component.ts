import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'crud-list',
  templateUrl: './list.component.html',
  styles: [ 
  ]
})
  
export class ListComponent implements OnInit{

  public users: User[] = []

  constructor(
    private dataService: DataService
  ) { }
  
  ngOnInit(): void {
    this.dataService.getUsers().subscribe(user => this.users = user)
  }

  onButtonClick(user: User) {
    this.dataService.setUser(user)
  }
 

  deleteUser(user: User) {
    this.dataService.deleteUser(user).subscribe()
    console.log(user)
    window.location.reload()
  }

}
