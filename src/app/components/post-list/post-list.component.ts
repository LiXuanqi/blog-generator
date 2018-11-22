import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  postList = [];
  labels = [];

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
        console.log(data);
        this.postList = data;
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
