import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/services/wallet-backend.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit{
  wallets: Wallet[] = [];

  msg: string = "";
  errorMsg: string = "";

  constructor(private router: Router, private walletBackEndService: WalletBackendService) { } //DI

  ngOnInit(): void {
    
    this.walletBackEndService.getAllWallets().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.wallets = data;
        },
        error: (err) => {
          console.log(err);

        },
        complete: () => { }
      }
    )
  }

  deleteWallet(id?: number): void {
    console.log("Delete wallet id:" + id);
    if (window.confirm("Do you want to delete Wallet >?"))
      this.walletBackEndService.deleteWalletById(id).subscribe(
        {
          next: (data) => { // success
            this.msg = "Wallet Deleted Successfully . Id:" + id;
            this.errorMsg = "";
            // to filter the wallet having delted id

            this.wallets = this.wallets.filter((wall) => {
              console.log("wall.id:" + wall.id);
              console.log("id:" + id);

              if (wall.id != id) {
                console.log("true :" + wall.id);
                return true;
              }

              else {
                console.log("false :" + wall.id);
                return false;

              }

            }
            );
            console.log(this.wallets);
            // reload all wallets
          },
          error: () => {
            this.errorMsg = "Wallet Could not be deletd.";
            this.msg = "";
          },
          complete: () => { }
        }
      )

  }

  updateWallet(wall: Wallet) {
    console.log("Update wall");
    console.log(wall);
    //this.router.navigate(['details',this.name]);
    this.router.navigate(['update', wall.id]);
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
