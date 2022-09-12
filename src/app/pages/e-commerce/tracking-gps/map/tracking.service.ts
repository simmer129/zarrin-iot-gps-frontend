import { Injectable } from "@angular/core";
import * as L from "leaflet";
import "leaflet-spline";




@Injectable({
    providedIn: "root",
  })
export class TrackingService{

    latLngs = [
        [-5.9765, 2.9542],
        [-6.1523, 2.5918],
        [-5.8337, 2.4052],
        [-5.5743, 2.4821],
        [-5.2294, 2.4492],
        [-4.9545, 2.1308],
        [-4.3286, 2.0544],
      ];
makeTracking(latLngs){
const mySpline = L.spline(latLngs);
return mySpline;
}
}