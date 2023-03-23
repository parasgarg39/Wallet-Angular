import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/services/wallet-backend.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-addfunds',
  templateUrl: './addfunds.component.html',
  styleUrls: ['./addfunds.component.css']
})
export class AddfundsComponent {
  wallet:Wallet=new Wallet();
  formSubmitted=false;
  constructor(private walletBackEndService:WalletBackendService){}
  onSubmit(){
    console.log(this.wallet);
    
    this.formSubmitted=true;
    let empPost: Observable<any> =this.walletBackEndService.addToWallets(this.wallet.id,this.wallet.balance);
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
