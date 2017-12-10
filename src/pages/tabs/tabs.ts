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
  tab2Root='ProfilePage';
  tab3Root='SoftPage';
  tab4Root='TechPage';
  tab5Root='ProjectPage';
  tab6Root='ProjectworkPage';
  tab7Root='ActivitiesPage';
  tab8Root='ContactPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

} 
