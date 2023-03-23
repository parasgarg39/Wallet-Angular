import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  wallet: Wallet = { name: "", password: "" };
  constructor(private router:Router){}

  displayUserForm(){
    console.log("displayUserForm()");
    console.log(this.wallet);
  }
  errorMessage: string = '';
  submitLoginForm(){
    console.log("submitLoginForm()");
    // this.router.navigate(['/afterlogin']);

    // if user is authorised navigate to home/dashboard page
    if(this.wallet.name=="Paras" && this.wallet.password=="Paras1234")
      this.router.navigateByUrl("afterlogin");
    else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
}
