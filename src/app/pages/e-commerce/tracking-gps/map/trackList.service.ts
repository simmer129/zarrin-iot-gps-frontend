import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackListService {

  private REST_API_SERVER = "http://localhost:3000/device-log/id/c9d64c6f-e79e-4a14-afdf-e484916036c4";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get<any>(this.REST_API_SERVER);
  }
}
