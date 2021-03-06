import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GITHUB_GET_ISSUES_API, GITHUB_MARKDOWN_RENDER_API, GITHUB_GET_LABELS_API, GITHUB_OAUTH_GET_ACCESS_TOKEN_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_GET_USER_INFO_API, GITHUB_GRAPHQL_URL, GITHUB_ACCESS_TOKEN } from '../../config';
import { getAccessToken } from '../utils/accessTokenUtil';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  getIssues() {
    return this.http.get(GITHUB_GET_ISSUES_API);
  }

  getIssueByNumber(number) {
    return this.http.get(`${GITHUB_GET_ISSUES_API}/${number}`);
  }

  renderMarkdownToHTML(markdown) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain'
      }),
      responseType: 'text'
    };

    const body = {
      text: markdown,
      mode: 'gfm'
    }

    return this.http.post(GITHUB_MARKDOWN_RENDER_API, body, { responseType: "text"});
  }

  getLabels() {
    return this.http.get(GITHUB_GET_LABELS_API);
  }

  getCommentsByIssueNumber(number) {
    return this.http.get(`${GITHUB_GET_ISSUES_API}/${number}/comments`);
  }

  addComment(issueNumber, body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `token ${getAccessToken()}`
      })
    };

    return this.http.post(`${GITHUB_GET_ISSUES_API}/${issueNumber}/comments`, { body: body }, httpOptions);
  }

  getAccessTokenByCode(code) {
    const body = {
      code: code,
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET
    }
    return this.http.post(GITHUB_OAUTH_GET_ACCESS_TOKEN_URL, body);
  }

  getUserInfo() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${getAccessToken()}`
      })
    };
    return this.http.get(GITHUB_GET_USER_INFO_API, httpOptions);
  }

  graphqlApi(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${GITHUB_ACCESS_TOKEN}`
      })
    }
    return this.http.post(GITHUB_GRAPHQL_URL, body, httpOptions);
  }

  getPinnedRepositories() {
    return this.graphqlApi(
      ` \
      { \
        \"query\": \"query {\n  repository(owner:\"octocat\", name:\"Hello-World\") {\n    issues(last:20, states:CLOSED) {\n      edges {\n        node {\n          title\n          url\n          labels(first:5) {\n            edges {\n              node {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\" \
      } \
      `
    );
  }
}
