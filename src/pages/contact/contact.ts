import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeopleServiceProvider} from "../../providers/people-service/people-service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  peoples: any;

  constructor(public navCtrl: NavController, private http: HttpClient, private peopleService: PeopleServiceProvider) {
    // this.http.get("/assets/json/generated.json").subscribe(data => this.peoples = data);
    this.peoples = peopleService.peoples;
  }

}
