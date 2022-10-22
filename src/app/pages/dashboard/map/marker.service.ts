import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import { PopUpService } from "./popup.service";
import { DataService } from "./data.service";


@Injectable({
  providedIn: "root",
})
export class MarkerService implements OnInit{
  capitals: string = "/assets/data/usa-capitals.geojson";
  deviceDetails;
  constructor(private http: HttpClient, private popupService: PopUpService, private dataService: DataService) {}

  static scaledRadius(val: number, maxVal: number): number {
    return val / maxVal;
  }

  makeCapitalMarkers(map: L.Map): void {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      
        const lat = data.lat;
        const lon = data.lon;
        const marker = L.marker([lat, lon]);
        marker.bindPopup(this.popupService.makeCapitalPopup(data));
        marker.addTo(map);
        console.log("c is a : " + JSON.stringify(data))
        console.log("data is a : " + JSON.stringify(data))
        console.log("deviceDetails is a : " + this.deviceDetails)
      }
    );
  }
  ngOnInit() {
    this.dataService.sendDeviceGetRequest().subscribe((dates: any) => {
      this.deviceDetails = dates;
      console.log("looggss :" + this.deviceDetails)
    })
  }
}