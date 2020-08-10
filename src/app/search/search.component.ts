import { Component, OnInit } from '@angular/core';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchCity: string;
  weatherData: any[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  onSubmit(city: HTMLInputElement) {
    this.searchCity = city.value;
    this.searchService.getResult(this.searchCity).subscribe(
      (responseData) => {
        this.setData(responseData);
        console.log(responseData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setData(responseData) {
    for (let item of responseData['dataArray']) {
      this.weatherData.push(item);
    }
  }
}
