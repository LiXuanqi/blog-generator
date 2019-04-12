import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PROJECTS_URL } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects() {
    return this.http.get(PROJECTS_URL);
  }
}
