import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeopleServiceProvider} from "../../providers/people-service/people-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private peopleService: PeopleServiceProvider) {

  }

}
