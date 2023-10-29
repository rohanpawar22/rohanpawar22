import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core/core.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    CoreComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CoreComponent
  ],
})
export class CoreModule { }
