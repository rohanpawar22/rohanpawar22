import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect/connect.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConnectComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    FormsModule
  ]
})
export class ConnectModule { }
