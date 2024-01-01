import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';


export class Products {
  title?: string;
  price?: any;
  ingredients?: string;
  image?: string;
  description?: string;
  quantity?: any;
  total?: any;
  category?: string;
}

@Component({
  templateUrl: 'products.component.html',
})
export class ProductsComponent {
  constructor(private chartData: DashboardChartsData) {
  }

  public productList: Products[] = [
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-1.jpg", price: 29 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-2.jpg", price: 35 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-3.jpg", price: 15 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-4.jpg", price: 28 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-5.jpg", price: 12 },
    { title: "Grilled Beef with potatoes", ingredients: "Meat, Potatoes, Rice, Tomatoe", image: "assets/images/breakfast-6.jpg", price: 39 },
  ]

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartData.initMainChart(value);
    this.initCharts();
  }


}
