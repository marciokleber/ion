import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';


@NgModule({
  declarations: [DeviceComponent],
  imports: [
    CommonModule,
    IonicModule,
    DeviceRoutingModule,
  ],
  exports: [DeviceComponent]
})
export class DeviceModule { }
