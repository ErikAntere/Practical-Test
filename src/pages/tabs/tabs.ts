import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
/**Erik Antere 1601554 Here are the tabs on the bottom of the pages */
export class TabsPage {
  tab1Root='HomePage';
  tab2Root='CvPage';
  tab3Root='AboutPage';
  tab4Root='ProjectworkPage';
  tab5Root='ActivitiesPage';
  tab6Root='ContactPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

} 
