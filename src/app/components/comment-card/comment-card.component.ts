import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.sass']
})
export class CommentCardComponent implements OnInit {

  theHtmlString: string;

  @Input() comment;

  constructor(
    @Inject('github') private github
  ) { }

  ngOnInit() {
    this.renderMarkdownToHTML(this.comment.body);
  }

  renderMarkdownToHTML(markdown) {
    this.github.renderMarkdownToHTML(markdown)
      .subscribe((data) => {
        this.theHtmlString = data;
      })
  }

}
