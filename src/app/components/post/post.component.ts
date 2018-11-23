import { Component, OnInit, Inject } from '@angular/core';
import QRCode from 'qrcode'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  theHtmlString = "<h1>HTMP STRING</h1>";
  QRCodeImageUrl = "";
  constructor(
    @Inject("github") private github
  ) { }

  ngOnInit() {
    this.getPost();
    this.generateQRCode();
    
  }

  generateQRCode() {
    QRCode.toDataURL(window.location.href)
      .then(url => {
        console.log(url)
        this.QRCodeImageUrl = url;
      })
      .catch(err => {
        console.error(err)
      })
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
