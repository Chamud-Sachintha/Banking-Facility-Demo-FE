import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBankComponent } from '../create-bank/create-bank.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialogService: MatDialog) { }

  openDialog(){
    this.dialogService.open(CreateBankComponent);
  }

  ngOnInit(): void {
  }

}
