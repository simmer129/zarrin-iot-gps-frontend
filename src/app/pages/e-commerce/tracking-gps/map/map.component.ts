import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from './marker.service';



const iconRetinaUrl = '../../../../assets/images/nick.png';
const iconUrl = '../../../../assets/images/nick.png';
const shadowUrl = '../../../../assets/images/nick.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
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
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 15,
      minZoom: 3,
      zoom:this.zoomIn(),
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
    return 9;
  }

  ngOnInit(): void { }
  
}