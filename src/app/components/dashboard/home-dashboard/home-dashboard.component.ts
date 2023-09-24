import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  public data: Object[];
  public xAxis: Object;
  public yAxis: Object;
  public chartTitle: string;
  public legend: Object;
  public markerSettings: Object;
  public tooltipSettings: Object;
  constructor(){
    this.chartTitle = "IKADI Data visalization";
    this.data =[
      {month:"Jan", sale:35},{month:"Feb", sale:28},
      {month:"Mar", sale:34},{month:"Apr", sale:32},
      {month:"May", sale:40},{month:"Jun", sale:32},
      {month:"Jul", sale:35},{month:"Aug", sale:55},
      {month:"Sept", sale:38},{month:"Oct", sale:30},
      {month:"Nov", sale:25},{month:"Dec", sale:32}
    ]
    this.tooltipSettings = {
      enable : true
    }
    this.markerSettings = {
      visible: true,
      dataLabel:{
        visible : true
      }
    }
    this.legend = {
      visible : true
    };
    this.xAxis = {
      title: "Month",
      valueType: "Category"
    };
    this.yAxis = {
      title: "Sales"
    }
  }
}
