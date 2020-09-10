import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KeroroPage } from '../keroro/keroro';
import { GiroroPage } from '../giroro/giroro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  keroro(){
    this.navCtrl.push(KeroroPage)
  }
  giroro(){
    this.navCtrl.push(GiroroPage)
  }

}
