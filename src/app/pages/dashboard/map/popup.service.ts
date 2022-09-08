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
      `<a href="#">Open</a><br/>`+
      `</div>`
  }
}