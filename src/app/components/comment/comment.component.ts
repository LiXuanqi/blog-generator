import { Component, OnInit, Inject } from '@angular/core';
import { GITHUB_OAUTH_AUTHORIZE_URL, GITHUB_CLIENT_ID } from 'src/config';
import { ActivatedRoute } from '@angular/router';
import { setAccessToken } from 'src/app/utils/accessTokenUtil';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  comments = [];

  constructor(
    @Inject("github") private github,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCommentsByIssueNumber(1);
    this.activatedRoute.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.github.getAccessTokenByCode(code)
          .subscribe((data) => {
            console.log(data);
            const { access_token } = data;
            if (access_token) {
              setAccessToken(access_token);
            }     
          });
      }
      
    });
  }

  getCommentsByIssueNumber(number) {
    this.github.getCommentsByIssueNumber(number)
      .subscribe((data) => {
        console.log(data);
        this.comments = data;
      });
  }

  addComment() {
    this.github.addComment(1, "test post 11")
      .subscribe((data) => {
        console.log(data);
      });
  }

  login() {
    const scope = "public_repo";
    const redirectUrl = "http://localhost:4200"
    window.location.href = `${GITHUB_OAUTH_AUTHORIZE_URL}?client_id=${GITHUB_CLIENT_ID}&scope=${scope}&redirect_uri=${redirectUrl}`;

  }

  logout() {
    
  }

}
