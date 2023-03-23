import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  @Output() confirmLogout = new EventEmitter<boolean>();

  constructor() { }

  logout() {
    this.confirmLogout.emit(true);
  }

}
