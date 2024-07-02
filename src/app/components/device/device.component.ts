import { Component, OnInit } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent  implements OnInit {

  deviceInfo?: DeviceInfo
  battery?: string;


  constructor() { }

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    console.log(this.deviceInfo);

    const info = await Device.getBatteryInfo()
    if(info.batteryLevel){
      this.battery = `${(info.batteryLevel * 100).toFixed()}%`;
    }
  }

}
