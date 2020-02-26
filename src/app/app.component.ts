import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as AV from 'leancloud-storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    
    //初始化后台
    AV.init({
      appId: "3tFlK5Dgnx2rgogqfz0epJGR-gzGzoHsz",
      appKey: "3NEq8WtlETIhNa26bprpDUwl",
      serverURLs: "https://www.goutongfa.com"
    });
    //开启调试
    AV.debug.enable();
   
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      

    });
  }
}
