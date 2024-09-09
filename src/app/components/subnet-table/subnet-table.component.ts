import { Component } from '@angular/core';
import {  Inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { calculateSubnets, Subnet } from './logic'; 
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { NgFor } from '@angular/common';
import { CalculatorSubnetComponent } from '../calculator-subnet/calculator-subnet.component';
import * as logic from './logic';


@Component({
  selector: 'app-subnet-table',
  standalone: true,
  imports: [MatDialogContent,  MatTableModule, MatDialogActions,MatButton, NgFor, CalculatorSubnetComponent],
  templateUrl: './subnet-table.component.html',
  styleUrl: './subnet-table.component.css'
})
export class SubnetTableComponent {
  displayedColumns: string[] = ['i', 'Ipsubred', 'Ipconf', 'Broadcast'];
  subnets: Subnet[];

  constructor(
    public dialogRef: MatDialogRef<SubnetTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Use the data passed from the parent component to calculate subnets
    this.subnets = calculateSubnets(
      this.data.ipAddress,
      this.data.saltos,
      this.data.Nsubred,
      this.data.networkClass
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


}
