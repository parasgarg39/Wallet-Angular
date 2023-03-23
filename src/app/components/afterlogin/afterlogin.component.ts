import { Component } from '@angular/core';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent {
  logout(){
    var confirmed = confirm("Are you sure you want to logout?🙁");

    // If the user confirms, redirect to the homepage
    if (confirmed) {
      window.location.href = "/home";
    }else { 
      return;
      
    }
  }

}
