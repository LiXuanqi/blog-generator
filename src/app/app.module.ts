import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
// services
import { GithubService } from '../app/services/github.service';
import { PostComponent } from './components/post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: "github",
    useClass: GithubService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
