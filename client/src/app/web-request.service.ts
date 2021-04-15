import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
  }

  get(uri: string) {
    return this.http.get(`${uri}`);
  }

  post(uri: string, payload: Object) {
    const res = this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    console.log(res);
    return res; //this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(
      `api/users/login`,
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
      `api/users`,
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
