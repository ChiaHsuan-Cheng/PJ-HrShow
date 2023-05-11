import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;

  constructor(private http: HttpClient) { this.url = "http://localhost:5000"; }


  allHrdata() {
    return this.http.get(this.url + '/allHrdata');
  }

}

