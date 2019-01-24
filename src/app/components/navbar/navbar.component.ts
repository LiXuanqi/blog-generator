import { Component, OnInit } from '@angular/core';
import { LINKEDIN_URL, GITHUB_URL } from '../../../profile';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public linkedinUrl: string = LINKEDIN_URL;
  public githubUrl: string = GITHUB_URL;

  constructor() { }

  ngOnInit() {
  }

}
