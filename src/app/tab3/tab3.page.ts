import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import * as AV from 'leancloud-storage';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  innerDiv = "";
  showContent = false;

  items: any[] = [];
  backdropDismiss = false;
  showBackdrop = true;
  shouldPropagate = false;

  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  }
  };

  constructor() {
    var query = new AV.Query('positive_discipline');
    query.get('5e42c760844bb4008e7208fc').then( (tool) => {
      // todo 就是 objectId 为 582570f38ac247004f39c24b 的 Todo 实例
      var title = tool.get('title');
      let tempStr: string = tool.get('full_content');
      let temp2 = tempStr.replace(/\n/g, " ");
      
      this.innerDiv = `
  <h2>
    Leancloud
</h2>
<p>
    AV.Object 还提供了另一个方法 toJSON()。它们的区别是 toJSON() 得到的对象仅包含对象的 payload，一般用于展示，而 toFullJSON() 得到的对象包含了元数据，一般用于传输。在使用时请注意区分。
</p>
<p>
    // 将字符串反序列化为 JSON 对象
var json = JSON.parse(serializedString);
// 将 JSON 对象反序列化成 AV.Object 对象
var todo = AV.parseJSON(json);
</p>
  `;
  this.showContent = true;

      // 获取内置属性
      //var objectId = tool.id;
      //var updatedAt = tool.updatedAt;
      //var createdAt = tool.createdAt;
    }).catch( (errorMsg) => {
      // catch 方法写在 Promise 链式的最后，可以捕捉到全部 error
      console.error(errorMsg);
    });
  }

  ionViewWillEnter() {

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  search(q: string) {
    console.log(q);
  }

}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const images = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile'
];

function getImgSrc() {
  const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
  rotateImg++;
  if (rotateImg === images.length) {
    rotateImg = 0;
  }
  return src;
}

let rotateImg = 0;
