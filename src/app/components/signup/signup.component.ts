import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/services/wallet-backend.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  wallet:Wallet=new Wallet();

  constructor(private walletBackEndService:WalletBackendService){}
  formSubmitted = false;
onSubmit(){
  console.log(this.wallet);
  // this.employeeService.addEmployee(this.employee);
  this.formSubmitted = true;
  let empPost: Observable<any> =this.walletBackEndService.addWallet(this.wallet);
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
}