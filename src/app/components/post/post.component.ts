import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  theHtmlString = "<h1>HTMP STRING</h1>";
  constructor(
    @Inject("github") private github
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.github.getIssueByNumber(1)
      .subscribe((data) => {
        console.log(data);
        const { body } = data;
        // console.log(body);
        this.renderMarkdownToHTML(body);
      })
  }

  renderMarkdownToHTML(markdown) {
    this.github.renderMarkdownToHTML(markdown)
      .subscribe((data) => {
        this.theHtmlString = data;
      })
  }

}
