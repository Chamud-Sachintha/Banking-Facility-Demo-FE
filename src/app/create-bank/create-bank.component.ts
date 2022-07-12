import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BankingServiceService } from '../services/banking-service.service';
import { BankingDetails } from '../shared/banking-details';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  newBankDetail = new BankingDetails;
  createBankForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private bankservice: BankingServiceService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.createBankForm = this.formBuilder.group({
      bankName: ['', Validators.required],
      incorpDate: ['', Validators.required],
      noOfStaff: ['', Validators.required],
      noOfBranches: ['', Validators.required],
      bankStatus: ['', Validators.required]
    });
  }

  onSubmitBankDetails(){

    this.newBankDetail.bankName = this.createBankForm.get('bankName')?.value;
    this.newBankDetail.incooperateDate = this.createBankForm.get("incorpDate")?.value;
    this.newBankDetail.noOfStaff = this.createBankForm.get("noOfStaff")?.value;
    this.newBankDetail.noOfBranches = this.createBankForm.get("noOfBranches")?.value;
    this.newBankDetail.bankStatus = this.createBankForm.get("bankStatus")?.value;

    this.bankservice.saveBankDetails(this.newBankDetail).subscribe((result) => {
      this.toastService.success("Bank Details Registration Successfully.!", "Bank Registration.");
    },
    err => {
      this.toastService.error("Bank Details Registration Not Successfully.!","Bank Registration.");
    });
  }

}
