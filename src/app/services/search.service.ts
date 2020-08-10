import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../Model/data.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  dataArray: DataModel[];
  baseUrl = 'http://api.openweathermap.org/data/2.5/';
  apiKey = 'afb4d19230b7d3ff2bb36635e8096bb2';

  getResult(city: string) {
    return this.http
      .get(this.baseUrl + 'weather?q=' + city + '&appid=' + this.apiKey)
      .pipe(
        map((responseData) => {
          this.dataArray = [];
          //responseData;
          let obj = new DataModel(
            responseData['weather'][0].main,
            responseData['main'].temp,
            responseData['main'].feels_like,
            responseData['main'].temp_min,
            responseData['main'].temp_max,
            responseData['main'].humidity,
            responseData['name'],
            responseData['id']
          );
          this.dataArray.push(obj);

          return {
            dataArray: this.dataArray,
          };
        })
      );
  }
}
