export class DataModel {
  constructor(
    private summary: string,
    private temp: number,
    private feelsLike: number,
    private minTemp: number,
    private maxTemp: number,
    private humidity: number,
    private cityName: string,
    private CityId: number
  ) {}
}
