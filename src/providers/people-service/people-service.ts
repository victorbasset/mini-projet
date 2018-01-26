import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {
  public peoples: any;

  constructor(public http: HttpClient) {
    this.http.get("/assets/json/generated.json").subscribe(data => this.peoples = data);
  }
}
