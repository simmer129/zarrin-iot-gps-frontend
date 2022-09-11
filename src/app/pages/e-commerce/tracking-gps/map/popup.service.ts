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
    `</div>`
  }
}