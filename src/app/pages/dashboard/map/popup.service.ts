import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div style="width:200px;height:200px;text-align:center">`+
      `<div>Capital: ${ data.name }</div><br/>` +
      `<div>State: ${ data.state }</div><br/>` +
      `<div>Population: ${ data.population }</div><br/>` +
      ` <button style='  border: none;
      color: white;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 10px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
      background-color: white; 
      color: black; 
      border: 2px solid #4CAF50;
      ' onclick="location.href='../../e-commerce/tracking-gps'" >
           ردیابی
        </button>`+
      `</div>`
  }
}