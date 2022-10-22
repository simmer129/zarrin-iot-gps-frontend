import { Component, OnInit } from "@angular/core";
import { fruits } from "./fruits-list";
import { DataListService } from "./data-list.service";

@Component({
  selector: "ngx-device-list",
  templateUrl: "device-list.component.html",
  styleUrls: ["device-list.component.scss"],
})
export class DeviceListComponent implements OnInit {
  fruits = fruits;


  sendRow(ids: any): any {
    console.log("Its idsssss" + ids);
    let data = this.deviceList[ids].row;
    return data;
  }

  deviceList = [];

  constructor(private dataListService: DataListService) {}

  ngOnInit() {
    this.dataListService.sendGetRequest().subscribe((data: any[]) => {
      // console.log("looooogs in device List:", data);
      this.deviceList.push(data);
      console.log("list nahaee is" + JSON.stringify(this.deviceList))
    });
  }
}
