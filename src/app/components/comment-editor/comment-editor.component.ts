import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setAccessToken } from 'src/app/utils/accessTokenUtil';
import { GITHUB_OAUTH_AUTHORIZE_URL, GITHUB_CLIENT_ID } from 'src/config';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comment-editor',
  templateUrl: './comment-editor.component.html',
  styleUrls: ['./comment-editor.component.sass']
})
export class CommentEditorComponent implements OnInit {

  user: any = {};

  @Output() updateCommentEvent = new EventEmitter();

  constructor(
    @Inject("github") private github,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const code = params['code'];
      if (code !== null) {
        this.github.getAccessTokenByCode(code)
          .subscribe((data) => {
            console.log(data);
            const { access_token } = data;
            if (access_token) {
              setAccessToken(access_token);
              this.getUserInfo();
            }     
          });
        // remove the code from url.
        this.location.replaceState(window.location.pathname);
      }
    });
  }

  addComment(body) {
    console.log("body: " + body);
    this.github.addComment(1, body)
      .subscribe(() => {
        console.log("comment success");
        this.updateCommentEvent.next();
      });
  }

  getUserInfo() {
    this.github.getUserInfo()
      .subscribe((data) => {
        console.log(data);
        this.user = data;
      });
  }

  login() {
    const scope = "public_repo";
    const redirectUrl = window.location.href;
    window.location.href = `${GITHUB_OAUTH_AUTHORIZE_URL}?client_id=${GITHUB_CLIENT_ID}&scope=${scope}&redirect_uri=${redirectUrl}`;
  }

  logout() {
    
  }
}
