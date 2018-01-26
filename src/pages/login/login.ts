import { NavController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Component } from "@angular/core";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  tabsPage = TabsPage;

  constructor(public navCtrl: NavController) {

  }

}
