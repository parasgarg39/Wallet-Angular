import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/services/wallet-backend.service';
import { Observable } from 'rxjs';
import{transfer} from 'src/app/model/transfer';
@Component({
  selector: 'app-transferfunds',
  templateUrl: './transferfunds.component.html',
  styleUrls: ['./transferfunds.component.css']
})
export class TransferfundsComponent {
  wallet:Wallet=new Wallet();
  formSubmitted=false;
  constructor(private walletBackEndService:WalletBackendService){}
  transferFund:transfer={fromId:undefined,toId:undefined,amount:undefined};
  onSubmit(){
    console.log(this.wallet);
    // this.employeeService.addEmployee(this.employee);
    this.formSubmitted=true;
    let empPost: Observable<any> =this.walletBackEndService.transferFunds(this.transferFund);
    empPost.subscribe(
      {
        next:(data)=>{ // executes when back end reposnds with success status code
          console.log(data);
        },
        error:(error)=>{ // executes when back end responds with error status code
          console.log(error);
        },
        complete:()=>{ //
          console.log("Post request Completed...")
        }
      }
    )
  }
  showLogoutDialog: boolean = false;

  openLogoutDialog() {
    this.showLogoutDialog = true;
  }

  closeLogoutDialog() {
    this.showLogoutDialog = false;
  }

  logout() {
    var confirmed = confirm("Are you sure you want to logout?");

    if (confirmed) {
      this.closeLogoutDialog();
      window.location.href = "/home";
    }
  }
}
  // logout(){
  //   var confirmed = confirm("Are you sure you want to logout?🙁");

  //   // If the user confirms, redirect to the homepage
  //   if (confirmed) {
  //     window.location.href = "/home";
  //   }else { 
  //     return;
      
  //   }
  // }
  

  

