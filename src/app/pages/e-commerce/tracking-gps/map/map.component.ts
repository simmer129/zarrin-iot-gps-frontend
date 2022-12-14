import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './marker.service';



const iconRetinaUrl = '../../../../../assets/map/marker4.svg';
const iconUrl = '../../../../../assets/map/marker4.svg';
//cerate icon address https://loading.io/asset/600392
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  iconSize: [35, 41],
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

  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [36.4422, 59.4210],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 15,
      zoom:3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(private markerService: MarkerService) {}

  ngAfterViewInit(): void { 
    this.initMap();
    // this.markerService.makeCapitalMarkers(this.map);
    this.markerService.makeCapitalCircleMarkers(this.map);
  }
  
  zoomIn():number{
    // console.log(zooms.sendRow)
    return 13;
  }

  ngOnInit(): void { }
  
}