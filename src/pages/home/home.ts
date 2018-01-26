import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  name:string;
  greeting:string;
  balance:number;
  eyeColor:string;
  age:number;
  company:string;
  email:string;
  phone:string;
  address:string;
  about:string;
  favoriteFruit:string;

  ngOnInit() {
    this.name = "Jessie";
    this.greeting = "Hello Jessie ! You have 9 unread messages.";
    this.balance = 2987.20;
    this.eyeColor = "green";
    this.age = 23;
    this.company = "KINGJOUET";
    this.email = "jessie@toy.fr";
    this.phone = "066666666666";
    this.address = "Versaille story";
    this.about = "Est exercitation reprehenderit elit sit. Laborum duis consequat duis officia enim anim voluptate fugiat minim aute ad esse. Qui mollit nisi qui elit laborum reprehenderit nulla minim commodo. Fugiat id sit ipsum excepteur minim irure veniam.";
    this.favoriteFruit = "banana";
  }
  constructor(public navCtrl: NavController) {

  }


}
