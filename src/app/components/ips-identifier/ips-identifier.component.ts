import { Component } from '@angular/core';
import { MatList, MatListItem} from '@angular/material/list';
import { NgIf } from '@angular/common';
import * as logic from './logic';
import { IpAddressLogic } from './logic';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ips-identifier',
  standalone: true,
  imports: [MatList, MatListItem, NgIf, MatButtonModule, FormsModule],
  templateUrl: './ips-identifier.component.html',
  styleUrl: './ips-identifier.component.css'
})
export class IpsIdentifierComponent {
  ipAddress: string = '';
  results: string = '';
  handleStart(){
    if (this.ipAddress) {
      this.results = IpAddressLogic.analyzeIPAddress(this.ipAddress);
    } else {
      this.results = 'Please enter a valid IP Address.';
    }
  }


}
