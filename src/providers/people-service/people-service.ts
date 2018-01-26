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
    this.load();
  }

  load() {
    if (this.peoples) {
      // already loaded data
      return Promise.resolve(this.peoples);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('/assets/json/generated.json')
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.peoples = data;
          resolve(this.peoples);
        });
    });
  }
}
