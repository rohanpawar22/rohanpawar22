import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect/connect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ConnectComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ConnectModule { }
