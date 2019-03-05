import { Component, OnInit, Inject } from '@angular/core';
import { decodeMetaInfo } from 'src/app/utils/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postList = []

  constructor(
    @Inject("github") private github
  ) { }

  ngOnInit() {
    this.getPosts();
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
}
