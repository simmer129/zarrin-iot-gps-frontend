import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import "leaflet-spline";
import { PopUpService } from "./popup.service";
import { TrackingService } from "./tracking.service";


@Injectable({
  providedIn: "root",
})
export class MarkerService {
  

  capitals: string = "/assets/data/usa-capitals.geojson";
  trackingService: any;
  multipolyLineOptions: any;
    

  constructor(private http: HttpClient, private popupService: PopUpService, trackingService: TrackingService) {}

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  latens: [number , Number][] = [
    [35.11, -106.58],
    [35.13, -106.48],
    [35.07, -106.52],
    [35.07, -106.52],
  ];
  latens2: [number , Number][] = [
    [35.10, -106.62],
    [35.19, -106.87],
    [35.07, -106.80],
    [35.11, -106.58],
  ];

  latlang = 
    [[[35.10418, -106.62987],[35.19738, -106.875],[35.07946, -106.80634]],
    [[35.11654, -106.58318],[35.13142, -106.48876],[35.07384, -106.52412]]];


  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      const maxVal = Math.max(
        ...res.features.map((x) => x.properties.population),
      );
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.scaledRadius(c.properties.population, maxVal),
        });
        // const mySpline = L.spline(this.latens as [number, number][]);
        // const mySpline1 = L.spline(this.latens2 as [number, number][]);
        circle.bindPopup(this.popupService.makeCapitalPopup(c.properties));
        // map.addLayer(mySpline);
        // map.addLayer(mySpline1)
        L.polyline(this.latens as [number, number][], {color:'red', weight: 1,smoothFactor: 1}).addTo(map);
        L.polyline(this.latens2 as [number, number][], {color:'blue', weight: 3}).addTo(map);
        circle.addTo(map);
      }
    });
  }
}

