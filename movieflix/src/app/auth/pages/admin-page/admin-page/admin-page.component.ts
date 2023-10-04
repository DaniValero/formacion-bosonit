import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AdminService } from 'src/app/auth/services/admin.service';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  providers: [MessageService],
})
export class AdminPageComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public user?: User;
  private _unsubscribe$ = new Subject<boolean>();
  public editMode?: boolean = false;

  constructor(
    private _adminService: AdminService,
    private messageService: MessageService
  ) {}
  ngOnDestroy(): void {
    this._unsubscribe$.next(true)
    this._unsubscribe$.complete()
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._adminService
      .getAllUsers()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((user) => (this.users = user));
  }

  editUser(id: number) {
    this.editMode = true;
    this.user = this.users.find((user) => user.id === id);
  }

  exitForm() {
    this.editMode = false;
  }

  onSubmit() {
    if (this.user) {
      this._adminService.updateUser(this.user.id!, this.user)
      .pipe( takeUntil(this._unsubscribe$))
      .subscribe(
        (updatedUser) => {
          // Handle a successful update here, such as displaying a success message
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User updated',
          });

          this.exitForm();
        },
        (error) => {
          // Handle errors, such as displaying an error message
          console.error('Error updating user:', error);
        }
      );
    }
  }


}
