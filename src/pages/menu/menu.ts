import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;
/** Erik Antere 1601554. Here are the tabs for the menu */
  pages: PageInterface[] = [
    {title: 'Home', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'Profile', pageName: 'HomePage', tabComponent: 'ProfilePage', index: 1, icon: 'man'},
    {title: 'Soft Skills', pageName: 'HomePage', tabComponent: 'SoftPage', index: 2,  icon: 'contacts'},
    {title: 'Technical Skills', pageName: 'HomePage', tabComponent: 'TechPage', index: 3,  icon: 'build'},
    {title: 'Personal Project', pageName: 'HomePage', tabComponent: 'ProjectPage', index: 4,  icon: 'cube'},
    {title: 'Team Project', pageName: 'HomePage', tabComponent: 'ProjectworkPage', index: 5,  icon: 'briefcase'},
    {title: 'Activities', pageName: 'HomePage', tabComponent: 'ActivitiesPage', index: 6,  icon: 'bulb'},
    {title: 'Contact', pageName: 'HomePage', tabComponent: 'ContactPage', index: 7,  icon: 'at'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  openPage(page: PageInterface){
let params ={};

if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index != undefined) {
  this.nav.getActiveChildNav().select(page.index);
} else {
  this.nav.setRoot(page.pageName, params);
}
  }

    isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;

      }
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
  }
  /** Erik Antere 1601554. Here is the navigation for the logout button */
  logout(){
    this.app.getRootNav().setRoot(MyApp);
  }

} 