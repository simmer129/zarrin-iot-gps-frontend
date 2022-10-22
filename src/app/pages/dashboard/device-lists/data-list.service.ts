import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataListService {
  private REST_API_SERVER =
    "http://localhost:3000/device/serial/123456";
  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get<any>(this.REST_API_SERVER);
  }
}
