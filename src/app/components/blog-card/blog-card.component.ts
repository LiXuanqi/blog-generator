import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  
  @Input() post: any;

  constructor(
    @Inject("unsplash") private unsplash
  ) { }

  ngOnInit() {
  }

  getRandomPhoto() {
    this.unsplash.getRandomPhoto()
    .subscribe((data) => {
      return data['urls']['small'];
    })
  }
}
