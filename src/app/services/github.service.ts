import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GITHUB_GET_ISSUES_API, GITHUB_MARKDOWN_RENDER_API } from '../../config';
import { Observable } from 'rxjs';
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
    return this.http.get(`${GITHUB_GET_ISSUES_API}/${number}`)
  }

  renderMarkdownToHTML(markdown) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain'
      }),
      responseType: 'text'
    };

    return this.http.post(GITHUB_MARKDOWN_RENDER_API, markdown, { responseType: "text"});
  }
}
