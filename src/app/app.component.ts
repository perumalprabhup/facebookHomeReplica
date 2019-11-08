import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fname: string = "Perumal";
  lname: string = "Prabhu";

  sidenavbar: Object[];
  sidenavbarbottom: Object[];
  feedPost: Object[];
  comment: Object[];
  post: Object[];
  stories: Object[];
  glypf: Object[];
  news: Object[];
  request: Object[];
  msgs: Object[];
  pages: Object[];
  contacts: Object[];



  constructor() {

    this.sidenavbar = [
      { url: "https://www.iconfinder.com/data/icons/unique-round-blue/93/group-512.png", value: "Groups", count: 3 },
      { url: "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-13/512/Webpage-icon.png", value: "Pages", count: 2 },
      { url: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png", value: "Events", count: 5 },
      { url: "http://image.flaticon.com/icons/png/512/223/223120.png", value: "Friends Lists", count: 5 },
      { url: "http://icons.iconarchive.com/icons/judge/iphone/128/map-icon.png", value: "On this Day", count: 1 },
      { url: "http://icons.iconarchive.com/icons/yohproject/cute/128/game-icon.png", value: "Games", count: 8 }
    ];

    this.sidenavbarbottom = ["Ad", "Page", "Group", "Event"];

    this.feedPost = [
      { glyph: "fa fa-pencil", value: "Compose Post" },
      { glyph: "fa fa-file-image-o", value: "Photo/Video Album" },
      { glyph: "fa fa-video-camera", value: "Live Video" }
    ];

    this.comment = [
      { glyph: "fa fa-picture-o", value: "Photo/Video" },
      { glyph: "fa fa-smile-o", value: "Feeling/Activity" },
      { glyph: "fa fa-ellipsis-h", value: "" }
    ];

    this.post = [
      { url: "assets/images/img3.png", name: "varun", sharedName: "aswin", time: "1 min", content: "This week i have a nice trip with my cousine", like: 2, comment: 5, share: 10, url2: "assets/images/img1.png" },
      { url: "assets/images/img2.png", name: "Senthil Kumar", sharedName: "VigneshWaran", time: "2 min", content: "Had a nice weekend", like: 2, comment: 5, share: 10, url2: "assets/images/img4.png" },
      { url: "assets/images/img1.png", name: "Vignesh", sharedName: "Siva Kumar", time: "3 hrs", content: "Have a wounderful Lunch ", like: 2, comment: 5, share: 10, url2: "assets/images/img2.png" },
      { url: "assets/images/img3.png", name: "varun", sharedName: "aswin", time: "1 min", content: "This week i have a nice trip with my cousine", like: 2, comment: 5, share: 10, url2: "assets/images/img1.png" },
      { url: "assets/images/img2.png", name: "Senthil Kumar", sharedName: "VigneshWaran", time: "2 min", content: "Had a nice weekend", like: 2, comment: 5, share: 10, url2: "assets/images/img4.png" },
      { url: "assets/images/img1.png", name: "Vignesh", sharedName: "Siva Kumar", time: "3 hrs", content: "Have a wounderful Lunch ", like: 2, comment: 5, share: 10, url2: "assets/images/img2.png" },
      { url: "assets/images/img3.png", name: "varun", sharedName: "aswin", time: "1 min", content: "This week i have a nice trip with my cousine", like: 2, comment: 5, share: 10, url2: "assets/images/img1.png" },
      { url: "assets/images/img2.png", name: "Senthil Kumar", sharedName: "VigneshWaran", time: "2 min", content: "Had a nice weekend", like: 2, comment: 5, share: 10, url2: "assets/images/img4.png" },
      { url: "assets/images/img1.png", name: "Vignesh", sharedName: "Siva Kumar", time: "3 hrs", content: "Have a wounderful Lunch ", like: 2, comment: 5, share: 10, url2: "assets/images/img2.png" },
      { url: "assets/images/img3.png", name: "varun", sharedName: "aswin", time: "1 min", content: "This week i have a nice trip with my cousine", like: 2, comment: 5, share: 10, url2: "assets/images/img1.png" },
      { url: "assets/images/img2.png", name: "Senthil Kumar", sharedName: "VigneshWaran", time: "2 min", content: "Had a nice weekend", like: 2, comment: 5, share: 10, url2: "assets/images/img4.png" },
      { url: "assets/images/img1.png", name: "Vignesh", sharedName: "Siva Kumar", time: "3 hrs", content: "Have a wounderful Lunch ", like: 2, comment: 5, share: 10, url2: "assets/images/img2.png" },
      { url: "assets/images/img3.png", name: "varun", sharedName: "aswin", time: "1 min", content: "This week i have a nice trip with my cousine", like: 2, comment: 5, share: 10, url2: "assets/images/img1.png" },
      { url: "assets/images/img2.png", name: "Senthil Kumar", sharedName: "VigneshWaran", time: "2 min", content: "Had a nice weekend", like: 2, comment: 5, share: 10, url2: "assets/images/img4.png" },
      { url: "assets/images/img1.png", name: "Vignesh", sharedName: "Siva Kumar", time: "3 hrs", content: "Have a wounderful Lunch ", like: 2, comment: 5, share: 10, url2: "assets/images/img2.png" },
      { url: "assets/images/img3.png", name: "varun", sharedName: "aswin", time: "1 min", content: "This week i have a nice trip with my cousine", like: 2, comment: 5, share: 10, url2: "assets/images/img1.png" },
      { url: "assets/images/img2.png", name: "Senthil Kumar", sharedName: "VigneshWaran", time: "2 min", content: "Had a nice weekend", like: 2, comment: 5, share: 10, url2: "assets/images/img4.png" },
      { url: "assets/images/img1.png", name: "Vignesh", sharedName: "Siva Kumar", time: "3 hrs", content: "Have a wounderful Lunch ", like: 2, comment: 5, share: 10, url2: "assets/images/img2.png" }
    ];

    this.stories = [
      "assets/images/img1.png", "assets/images/img2.png", "assets/images/img3.png"
    ];

    this.glypf = [
      "fa fa-video-camera", "fa fa-futbol-o", "fa fa-flask", "fa fa-university"
    ];

    this.news = [
      { nation: "United Nations Security Council", news: "US vetoes UN resolution rejecting Trump's Jerusalem decisition ‑", from: "msn.com" },
      { nation: "North Korea", news: "U.S. set to declare North Korea carried out massive WannaCry cyber attack ‑", from: "msn.com" },
      { nation: "Mathew Petersen", news: "Trump judicial nominee withdraws after falling to answer basic... ‑", from: "cbsnews.com" }
    ];
    this.request = [
      { img: "assets/images/img4.png", name: "SRM Kavin" },
      { img: "assets/images/img3.png", name: "Vaisikan" }

    ];
    this.msgs = [
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" },
      { img: "assets/images/img3.png", name: "Mohammed", post: "This is a nice day" },
      { img: "assets/images/img2.png", name: "Nesa", post: "Had a nice trip" },
      { img: "assets/images/img1.png", name: "Pradeep", post: "I am at coffee day" },
      { img: "assets/images/logo.png", name: "Praveen", post: "Miss my home town" },
      { img: "assets/images/img4.png", name: "Milan", post: "Miss you Friends" }
    ];
    this.pages = [
      { img: "assets/images/img2.png", name: "Vivek", count: 2 },
      { img: "assets/images/img4.png", name: "Santhosh", count: 5 }

    ]; this.contacts = [
      { img: "assets/images/img4.png", name: "Ganesh" },
      { img: "assets/images/img3.png", name: "Chandru" },
      { img: "assets/images/logo.png", name: "Vadiappan" },
      { img: "assets/images/img2.png", name: "Prabhu" },
      { img: "assets/images/img1.png", name: "Nesa" },
      { img: "assets/images/img3.png", name: "Vivek" },
      { img: "assets/images/img2.png", name: "Santhosh" },
      { img: "assets/images/img1.png", name: "Milan" },
      { img: "assets/images/logo.png", name: "Chinna" },
      { img: "assets/images/img4.png", name: "Ganesh" },
      { img: "assets/images/img3.png", name: "Chandru" },
      { img: "assets/images/logo.png", name: "Vadiappan" },
      { img: "assets/images/img2.png", name: "Prabhu" },
      { img: "assets/images/img1.png", name: "Nesa" },
      { img: "assets/images/img3.png", name: "Vivek" },
      { img: "assets/images/img2.png", name: "Santhosh" },
      { img: "assets/images/img1.png", name: "Milan" },
      { img: "assets/images/logo.png", name: "Chinna" }
    ];

  }
}
