import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private products = [];
  private SERVER_URL = 'http://localhost:3000/';
  public headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');

  }
  sendData(formData: any) {
    this.http.post(this.SERVER_URL, formData, { headers: this.headers }).subscribe((res) => {
      console.log(res)
    }, err => console.log(err));
  }
  get_products() {
    return this.http.get(this.SERVER_URL + 'getdata');
  }

  update(formData: any, idNo: number) {
    return this.http.put(`http://localhost:3000/getData/${idNo}`, formData, { headers: this.headers });
  }

  delete(id: number) {
    console.log(this.SERVER_URL + id);
    return this.http.delete(`http://localhost:3000/getData/${id}`);
  }
}

