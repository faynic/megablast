import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyReportsService {


  baseUrl = 'http://192.168.50.167:8080/api/admin/reports';


  constructor( private http: HttpClient) { }



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }


}
