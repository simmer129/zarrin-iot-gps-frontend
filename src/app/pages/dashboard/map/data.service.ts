import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/device-log/id/ae8bb06d-c796-44ce-9429-8d02cbfe14c4";
  private DEVICE_GET_API = "http://localhost:3000/device/serial/123456";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendDeviceGetRequest(){
      return this.httpClient.get<any>(this.DEVICE_GET_API);
  }  
}


