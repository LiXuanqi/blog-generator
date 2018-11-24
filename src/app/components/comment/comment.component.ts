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
    this.getCommentsByIssueNumber(this.postId);
  }

  getCommentsByIssueNumber(number) {
    if (number) {
      this.github.getCommentsByIssueNumber(number)
        .subscribe((data) => {
          console.log(data);
          this.comments = data;
        });
    }
  }

 

}
