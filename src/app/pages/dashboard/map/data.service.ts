import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/device-log/id/c9d64c6f-e79e-4a14-afdf-e484916036c4";
  private DEVICE_GET_API = "http://localhost:3000/device/serial/123456";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendDeviceGetRequest(){
    return this.httpClient.get<any>(this.DEVICE_GET_API);
  }
}
