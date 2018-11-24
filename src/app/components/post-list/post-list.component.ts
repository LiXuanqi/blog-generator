import { Component, OnInit, Inject } from '@angular/core';
import { decodeMetaInfo } from 'src/app/utils/util';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  postList = [];
  labels = [];
  filterLabels = ['Algorithm'];
  constructor(
    @Inject("github") private github
  ) { }

  ngOnInit() {
    this.getPosts();
    this.getLabels();
  }

  getPosts() {
    this.github.getIssues()
      .subscribe((data) => {
        // decode meta info.
        this.postList = data.map((item) => {
          const metaInfo = decodeMetaInfo(item);
          return {
            ...item,
            metaInfo
          }
        });
        console.log(this.postList);
      });
   
  }

  getLabels() {
    this.github.getLabels()
      .subscribe((data) => {
        console.log(data);
        this.labels = data;
      });
  }

}
