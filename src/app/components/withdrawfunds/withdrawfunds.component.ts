import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/services/wallet-backend.service';
import { Observable } from 'rxjs';
import {transfer} from 'src/app/model/transfer';
@Component({
  selector: 'app-withdrawfunds',
  templateUrl: './withdrawfunds.component.html',
  styleUrls: ['./withdrawfunds.component.css']
})
export class WithdrawfundsComponent {
  wallet:Wallet=new Wallet();
  formSubmitted=false;
  errorMessage: string = '';
  constructor(private walletBackEndService:WalletBackendService){}
  
  onSubmit(){
    console.log(this.wallet);
    // this.employeeService.addEmployee(this.employee);
    // let currentBalance = this.walletBackEndService.getAllWallets(this.wallet.balance);
    // let currentBalance: Observable<any> =this.walletBackEndService.withdrawFromWallets(this.wallet.balance);
    // if (this.wallet.balance > currentBalance) {
    //   this.errorMessage = 'Insufficient Funds';
    //   return;
    // }
    this.formSubmitted=true;
    
    let wallPost: Observable<any> =this.walletBackEndService.withdrawFromWallets(this.wallet.id,this.wallet.balance);
    
    wallPost.subscribe(
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
