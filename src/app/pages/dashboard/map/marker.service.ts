import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';   
import "leaflet-sidebar-v2";



@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  makeCapitalCircleMarkers(map: any) {
    throw new Error('Method not implemented.');
  }
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient) { }

  

  makeCapitalMarkers(map: L.Map): void { 
    this.http.get(this.capitals).subscribe((res: any) => {
        for (const c of res.features) {
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const circle = L.circleMarker([lat, lon]);
          //start sidebar       
      
          //end sidebar
          circle.addTo(map).on('click',()=>{
            console.log("hiiiii");
          });
        }
      });
  }
}