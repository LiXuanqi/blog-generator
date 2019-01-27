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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { CommentEditorComponent } from './components/comment-editor/comment-editor.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { FilterByLabelPipe } from './pipes/filter-by-label.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoverComponent } from './components/cover/cover.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { UnsplashService } from './services/unsplash.service';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    CommentComponent,
    CommentEditorComponent,
    CommentCardComponent,
    FilterByLabelPipe,
    NavbarComponent,
    CoverComponent,
    HomeComponent,
    BlogComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [{
    provide: "github",
    useClass: GithubService
  }, {
    provide: "unsplash",
    useClass: UnsplashService
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: OAuthInterceptor,
    multi: true
  }, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
