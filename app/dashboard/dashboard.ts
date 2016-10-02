import { Component} from '@angular/core';
import {DashboardComponentA} from "./dashboard-component-a";
import {DashboardComponentB} from "./dashboard-component-b";

@Component({
    selector: 'dashboard',
    template: `
        <div *ngFor="let info of componentInfos" class="col-sm-4">
            <dashboard-component-outlet [type]="info.type" [title]="info.title" (selected)="select($event)">
            </dashboard-component-outlet>
        </div>
        
        <div class="col-sm-12">&nbsp;</div>
        
        <div *ngIf="selectedComponent" class="col-sm-12">
            <b>Selected: </b> {{ selectedComponent.title }}
        </div>
    `
})
export class Dashboard {

    private componentInfos = [
        {
            type: DashboardComponentA,
            title: '1st Component'
        },
        {
            type: DashboardComponentB,
            title: '2nd Component'
        },
        {
            type: DashboardComponentA,
            title: '3rd Component'
        }
    ];

    selectedComponent: Dashboard;

    select(selected) {
        this.selectedComponent = selected;
    }

}