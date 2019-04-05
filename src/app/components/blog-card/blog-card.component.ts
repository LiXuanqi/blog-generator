import { Component, OnInit, Input } from "@angular/core";
import { POST_COVER_PICS } from "src/config";

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog-card.component.html",
  styleUrls: ["./blog-card.component.scss"]
})
export class BlogCardComponent implements OnInit {
  @Input() post: any;
  pic: string;
  constructor() {}

  ngOnInit() {
    this.pic = this.post.metaInfo.pic;
  }

  getRandomPhotosByCategory() {
    const labels = this.post.labels;
    const categories = new Set();
    for (let i = 0; i < labels.length; i++) {
      categories.add(labels[i].name);
    }
    if (categories.has('Algorithm')) {
      const photos =  POST_COVER_PICS['algorithm'];
      return photos[this.getRandom(photos.length - 1)];
    }
    return POST_COVER_PICS.default;
  }

  getRandom(upper) {
    return Math.floor((Math.random() * (upper + 1)));
  }
}
