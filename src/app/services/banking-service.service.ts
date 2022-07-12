import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankingDetails } from '../shared/banking-details';

@Injectable({
  providedIn: 'root'
})
export class BankingServiceService {

  constructor(private http: HttpClient) { }

  getAllBanks(){
    return this.http.get<BankingDetails[]>(`${environment.baseURI}`);
  }

  saveBankDetails(newBankDetail: BankingDetails){
    return this.http.post(`${environment.baseURI}`, newBankDetail);
  }

}
