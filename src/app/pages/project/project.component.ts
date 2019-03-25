import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  projects = [
    {
      title: 'NuaaOversea',
      labels: ['React', 'Flask', 'Python'],
      logo: '/assets/nuaa-logo.png'
    },
    {
      title: 'RateMyNuaa',
      labels: ['Vue', 'Pyramid', 'Python']
    },
    {
      title: 'Leetcode-solutions',
      labels: ['Java', 'Python']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
