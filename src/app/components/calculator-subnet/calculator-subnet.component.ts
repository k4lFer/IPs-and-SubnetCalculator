import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import * as logic from './logic';
import { NgIf } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { SubnetTableComponent } from '../subnet-table/subnet-table.component';
import { Dialog, DialogCloseOptions} from '@angular/cdk/dialog';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog'; 

@Component({
  selector: 'app-calculator-subnet',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, NgIf, MatListModule, MatButtonModule, MatDialogClose],
  templateUrl: './calculator-subnet.component.html',
  styleUrl: './calculator-subnet.component.css'
})
export class CalculatorSubnetComponent {
  ipAddress = '';
  subredes = '';
  results: any = null;

  handleStart(): void {
    if (!this.ipAddress || !this.subredes) {
      alert('Por favor, ingresa la dirección IP y los bits de subred.');
      return;
    }

    const ipuno = logic.primernumero(this.ipAddress);
    const networkClass = logic.calculateNetworkClass(ipuno);
    const mascara = '/ ' + logic.calcularMascara(networkClass);
    const subnetInfo = logic.calculateSubnetInfo(parseInt(this.subredes, 10), networkClass, logic.calcularMascara(networkClass));
    const IPred = logic.calculateIPred(this.ipAddress, networkClass);

    this.results = {
      networkClass,
      mascara,
      IPred,
      ...subnetInfo
    };
  }
  constructor(private dialog: MatDialog) { }
  onclickTable(): void {

    const dialogRef = this.dialog.open(SubnetTableComponent, {
      data: {
        ipAddress: this.ipAddress,
        saltos: this.results.saltos,
        Nsubred: this.results.Nsubred,
        networkClass: this.results.networkClass
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Cuadro de diálogo cerrado', result);
    });
  }
  

}
