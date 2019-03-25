import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string;
  @Input() labels: string[];
  @Input() logoSrc: string;
  bgColorClass = 'bg-gradient1'
  constructor() { }
  
  ngOnInit() {
    this.bgColorClass = this.getRandomBackgroundGradientColor(14)
    
  }

  getRandomBackgroundGradientColor(max) {
    const random = Math.floor(Math.random() * max) + 1
    return `bg-gradient${random}`
  }
}
