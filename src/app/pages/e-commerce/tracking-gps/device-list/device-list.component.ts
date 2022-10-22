import { Component, OnInit } from '@angular/core';
import { fruits } from './fruits-list';
import { DeviceListService } from './device-list.service';
import { DataListService } from './dataList.service';



@Component({
    selector : 'ngx-device-list',
    templateUrl: 'device-list.component.html',
    styleUrls: ['device-list.component.scss'],
})
export class DeviceListComponent implements OnInit{
    fruits = fruits;
    
    
   constructor(private deviceListService : DeviceListService, private dataListService: DataListService){}

   getLocaleDateFormat(){
    let deviceing = this.deviceListService.makeLists;
    return deviceing;
   }

   deviceList = [];
 

      sendRow(ids:any):any{
        console.log("Its idsssss"+ids);
        let data = this.deviceList[ids].row;
        return data;
      }

      ngOnInit() {
        this.dataListService.sendGetRequest().subscribe((data: any[]) => {
          // console.log("looooogs in device List:", data);
          this.deviceList.push(data);
          console.log("list nahaee is" + JSON.stringify(this.deviceList))
        });
      }
}
