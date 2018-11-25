import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {
  postId = null;
  comments = [];

  constructor(
    @Inject("github") private github,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.postId = +params['id'];
    });
    this.getComments();
  }

  getComments() {
    if (this.postId) {
      this.github.getCommentsByIssueNumber(this.postId)
        .subscribe((data) => {
          console.log(data);
          this.comments = data;
        });
    }
  }

 

}
