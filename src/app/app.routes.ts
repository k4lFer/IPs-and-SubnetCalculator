import { Routes } from '@angular/router';
import { IpsIdentifierComponent } from './components/ips-identifier/ips-identifier.component';
import { CalculatorSubnetComponent } from './components/calculator-subnet/calculator-subnet.component';

export const routes: Routes = [
    {
        path:"ips-identifier",
        component:IpsIdentifierComponent
    },

    {
        path:"calculator-subnet",
        component:CalculatorSubnetComponent
    },


];
