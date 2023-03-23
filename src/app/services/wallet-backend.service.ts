import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from '../model/Wallet';
import { Observable } from 'rxjs';
import {transfer} from '../model/transfer';
@Injectable({
  providedIn: 'root'
})
export class WalletBackendService {

  constructor(private httpClient:HttpClient) { }

  getWalletById(id:string|null):Observable<any>{
    return this.httpClient.get("http://localhost:8090/wallet/"+id);
  }
  addWallet(newWallet:Wallet):Observable<any>{
    let url:string="http://localhost:8090/wallet";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  deleteWalletById(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/wallet/"+id);
  }
  
  getAllWallets():Observable<any>{
    return this.httpClient.get("http://localhost:8090/wallets");
  }
  
  withdrawFromWallets(id?: number, amount?: number): Observable<any> {
    // let url: string = "http://localhost:8090/wallet/${id}/fund/${amount}";
    let url = `http://localhost:8090/wallet/${id}/fund/${amount}`;
    return this.httpClient.patch(url, null);
  }
  addToWallets(id?: number, amount?: number): Observable<any> {
    let url = `http://localhost:8090/wallet/${id}/${amount}`;
    return this.httpClient.patch(url, null);
  }
  transferFunds(transferFund:transfer): Observable<any> {
    let url = `http://localhost:8090/wallet/fund`;
    return this.httpClient.post<boolean>(url, transferFund);
    // return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  
}
