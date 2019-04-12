import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  projects = []

  constructor(
    @Inject("api") private api
  ) { }

  ngOnInit() {
    this.getProjects();
    console.log(this.projects);
  }

  getProjects() {
      this.api.getProjects()
        .subscribe((data) => {
          // decode meta info.
          this.projects = data;
        });
  }
}
