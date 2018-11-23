import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  comments = [];

  constructor(
    @Inject("github") private github
  ) { }

  ngOnInit() {
    this.getCommentsByIssueNumber(1);
  }

  getCommentsByIssueNumber(number) {
    this.github.getCommentsByIssueNumber(number)
      .subscribe((data) => {
        console.log(data);
        this.comments = data;
      });
  }

 

}
