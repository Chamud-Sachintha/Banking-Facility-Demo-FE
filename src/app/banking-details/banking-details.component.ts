import { Component, OnInit } from '@angular/core';
import { BankingServiceService } from '../services/banking-service.service';
import { BankingDetails } from '../shared/banking-details';

@Component({
  selector: 'app-banking-details',
  templateUrl: './banking-details.component.html',
  styleUrls: ['./banking-details.component.css']
})

export class BankingDetailsComponent implements OnInit {

  dataSource!: BankingDetails[];
  displayedColumns: string[] = ['bankId', 'bankName', 'incooperateDate', 'noOfStaff','noOfBranches','bankStatus','actions'];
  
  constructor(private bankingService: BankingServiceService) { }

  ngOnInit(): void {
    this.getAllBanks();
  }

  getAllBanks(){
    this.bankingService.getAllBanks().subscribe((result) => {
      this.dataSource = result;
    });
  }

}
