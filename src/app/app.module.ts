import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
// services
import { GithubService } from '../app/services/github.service';
import { PostComponent } from './components/post/post.component';
import { OAuthInterceptor } from './services/oauth-interceptor';
import { CommentComponent } from './components/comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: "github",
    useClass: GithubService
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: OAuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
