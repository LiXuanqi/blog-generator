import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  postList = [];

  constructor(
    @Inject("github") private github
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.github.getIssues()
      .subscribe((data) => {
        console.log(data);
        this.postList = data;
      });
  }

}
