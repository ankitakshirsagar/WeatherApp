import { DataModel } from './../Model/data.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input('data') data: DataModel;

  constructor() {}

  summary: string;
  temp: number;
  feelsLike: number;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  cityName: string;
  CityId: number;

  ngOnInit(): void {
    this.summary = this.data['summary'];
    this.temp = this.data['temp'];
    this.temp = Math.round(this.temp - 273.15);
    this.feelsLike = this.data['feelsLike'];
    this.feelsLike = Math.round(this.feelsLike - 273.15);
    this.minTemp = this.data['minTemp'];
    this.minTemp = Math.round(this.minTemp - 273.15);
    this.maxTemp = this.data['maxTemp'];
    this.maxTemp = Math.round(this.maxTemp - 273.15);
    this.cityName = this.data['cityName'];
    this.CityId = this.data['CityId'];
  }
}
