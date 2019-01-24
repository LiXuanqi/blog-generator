import { Component } from '@angular/core';
// import Gitment from 'gitment'
// import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_USER_NAME, REPOSITORY_NAME } from 'src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-generator';
  ngOnInit() {
    // var gitment = new Gitment({
    //   id: "Traverse binary tree without recursion",
    //   owner: GITHUB_USER_NAME,
    //   repo: REPOSITORY_NAME,
    //   oauth: {
    //     client_id: GITHUB_CLIENT_ID,
    //     client_secret: GITHUB_CLIENT_SECRET,
    //   },
    // });
    // gitment.render('container');
  }

}
