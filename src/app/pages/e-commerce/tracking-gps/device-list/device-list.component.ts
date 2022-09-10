import { Component } from '@angular/core';
import { fruits } from './fruits-list';

@Component({
    selector : 'ngx-device-list',
    templateUrl: 'device-list.component.html',
    styleUrls: ['device-list.component.scss'],
})
export class DeviceListComponent{
    fruits = fruits;

     devises: {row : number, name : string, serial : string}[]=[
        {row : 1, name: 'GpsAval', serial: '235s4qw123'},
        {row : 2, name: 'GpsDovom', serial: '925s4aw173'},
        {row : 3, name: 'GpsSevom', serial: '435s4sc163'},
        {row : 4, name: 'GpsChahrom', serial: '145re2e5'},
        {row : 5, name: 'GpsPanjom', serial: '185re2e5'},
        {row : 6, name: 'GpsHashtoum', serial: '175re2e5'},
        {row : 7, name: 'GpsHashtoum', serial: '175re2e5'},
        {row : 8, name: 'GpsHashtoum', serial: '175re2e5'},
        {row : 9, name: 'GpsHashtoum', serial: '175re2e5'},
        {row : 10, name: 'GpsHashtoum', serial: '175re2e5'},
        {row : 11, name: 'GpsHashtoumerwerwer', serial: '175re2e54654489454654464'},
      ];

      sendRow(ids:any):any{
        console.log("Its idsssss"+ids);
        let data = this.devises[ids].row;
        return data;
      }
}
