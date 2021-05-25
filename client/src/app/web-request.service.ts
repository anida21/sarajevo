import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  readonly PRODUCTION_URL;

  constructor(private http: HttpClient) {
    
    this.ROOT_URL = 'https://sarajevotravel.herokuapp.com';
    
  }

  get(uri: string) {
    return this.http.get(`https://sarajevotravel.herokuapp.com/${uri}`);
  }

  post(uri: string, payload: Object) {
    const res = this.http.post(`https://sarajevotravel.herokuapp.com/${uri}`, payload);
    console.log(res);
    return res; //this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`https://sarajevotravel.herokuapp.com/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`https://sarajevotravel.herokuapp.com/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(
      `$https://sarajevotravel.herokuapp.com/api/users/login`,
      {
        email,
        password,
      },
      {
        observe: 'response',
      }
    );
  }

  signup(email: string, password: string, username: string) {
    return this.http.post(
      `https://sarajevotravel.herokuapp.com/api/users`,
      {
        email,
        password,
        username,
      },
      {
        observe: 'response',
      }
    );
  }
}
