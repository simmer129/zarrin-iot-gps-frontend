import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root",
})
export class DeviceListService{

    capitals: string = "/assets/data/usa-capitals.geojson";

    constructor(private http:HttpClient){}


    makeLists(){
        this.http.get(this.capitals).subscribe((res :any)=>{
            console.log("reeeeeeeeeeeeeeeesssssssssss",res);
            for(const c of res.features){
                const row = c.properties.name.length;
                const name = c.properties.name;
                const serial = c.properties.population;
            }
        });
    }
}