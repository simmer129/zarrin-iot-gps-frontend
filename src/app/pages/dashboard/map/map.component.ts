import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './marker.service';
import { DataService } from './data.service';
import * as zooms from '../device-lists/device-list.component';
import { Subscription } from 'rxjs';

const iconRetinaUrl = '../../../../assets/images/nick.png';
const iconUrl = '../../../../assets/images/nick.png';
const shadowUrl = '../../../../assets/images/nick.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [30, 46],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  
  interval:any;
  private zoomList = zooms;
  private map;
  private updateSubscription: Subscription;
  private initMap(): void {
    this.map = L.map('map', {
      center: [36.4422, 59.4210],
      zoom: 14
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 15,
      zoom: 14,
      zoomSnap: 0.25,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  products = [];

  constructor(private markerService: MarkerService, private dataService: DataService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
    // this.markerService.makeCapitalCircleMarkers(this.map);
    
  }

  zoomIn(): number {
    // console.log(zooms.sendRow)
    return 9;
  }

  ngOnInit() {
    
    console.log("rerere")
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log("data is : "+JSON.stringify(data));
      this.products = data;
    });
    this.interval = setInterval(()=>{
      this.map.off();
      this.map.remove();
      this.ngAfterViewInit();
      console.log(":-)");
      // this.map.removeLayer(this);
      // this.markerService.makeCapitalMarkers(this.map);

    },10000);
  };

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  removeMarker() {
    const marker = this;
    this.map.removeLayer(marker);
  }
}