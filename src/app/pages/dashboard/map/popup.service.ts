import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
    `<div style="width:150px;height:150px;text-align:center; padding: 10px; margin-top: 10px; ">`+
    `<div style="margin-top:3px;">Capital: ${data.name} </div><br/>`+
    `<div>State: ${data.state} </div><br/>`+
    `<div>Population: ${data.population} </div><br/>`+
     `<button style='  border: none;
    color: white;
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 3px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: white; 
    color: black; 
    border: 2px solid #FF7635;
    ' onclick="location.href='../../e-commerce/tracking-gps'" >
         ردیابی
      </button>`+ 
    `</div>` 
  }
}