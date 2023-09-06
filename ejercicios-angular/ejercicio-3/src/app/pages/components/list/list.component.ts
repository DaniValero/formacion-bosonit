import { Component, OnInit } from '@angular/core';
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

  editUser(user: User) {
    this.dataService.editUser(user)
  }


  // TODO: que se rellene el form con la info del usuario para editar 

}
