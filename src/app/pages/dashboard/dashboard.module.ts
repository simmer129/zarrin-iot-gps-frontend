import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";

import { ThemeModule } from "../../@theme/theme.module";
import { DashboardComponent } from "./dashboard.component";
import { StatusCardComponent } from "./status-card/status-card.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomSelectorComponent } from "./rooms/room-selector/room-selector.component";
import { TemperatureComponent } from "./temperature/temperature.component";
import { TemperatureDraggerComponent } from "./temperature/temperature-dragger/temperature-dragger.component";
import { KittenComponent } from "./kitten/kitten.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { SecurityCamerasComponent } from "./security-cameras/security-cameras.component";
import { ElectricityComponent } from "./electricity/electricity.component";
import { ElectricityChartComponent } from "./electricity/electricity-chart/electricity-chart.component";
import { WeatherComponent } from "./weather/weather.component";
import { SolarComponent } from "./solar/solar.component";
import { PlayerComponent } from "./rooms/player/player.component";
import { DeviceListComponent } from "./device-lists/device-list.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MarkerService } from "./map/marker.service";
import { MapComponent } from "./map/map.component";
import { PopUpService } from "./map/popup.service";

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    LeafletModule.forRoot(),
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    DeviceListComponent,
    MapComponent,
  ],
  providers: [MarkerService, PopUpService],
})
export class DashboardModule {}
