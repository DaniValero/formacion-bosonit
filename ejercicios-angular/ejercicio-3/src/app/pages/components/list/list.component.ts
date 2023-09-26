import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, takeUntil, Subject, filter } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'crud-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _dataService: DataService,
    private _tableService: TableService
  ) {}

  ngOnInit(): void {
    this.getUsers()
    this.getReloadTable()
    
  }

  onButtonClick(user: User) {
    this._dataService.setUser(user);
  }

  deleteUser(user: User) {
    this._dataService
      .deleteUser(user)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(() => this._tableService.setReloadTable(true));
  }

  getUsers() {
    this._dataService
      .getUsers()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((user) => (this.users = user));
  }

  getReloadTable() {
    this._tableService.getReloadTable$().pipe(
      takeUntil(this._unsubscribe$),
      filter((resp) => (resp))
    ).subscribe(() => {this.getUsers()})
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
