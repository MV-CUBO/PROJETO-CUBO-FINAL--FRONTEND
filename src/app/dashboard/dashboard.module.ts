import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { NgChartsConfiguration, NgChartsModule } from "ng2-charts";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [DashboardComponent],
    imports: [  
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        NgChartsModule,],

        providers: [
            { provide: NgChartsConfiguration, useValue: { generateColors: false }}
          ],
})


    export class DashboardModule{ }