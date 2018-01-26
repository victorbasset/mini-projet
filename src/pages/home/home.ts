import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeopleServiceProvider} from "../../providers/people-service/people-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public me: any = {
    name: "",
    greeting: "",
    balance: "",
    eyeColor: "",
    age: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    about: "",
    favoriteFruit: ""
  };


  constructor(public navCtrl: NavController, public peopleService: PeopleServiceProvider) {
    this.peopleService.load().then(peoples => {
      this.me = peoples[0];
      console.log(this.me);
    });
  }

}
