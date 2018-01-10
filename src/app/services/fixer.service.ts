import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class FixerService {

  constructor(private http: HttpClient) {
    environment.bases.forEach(base => {
      const params = new HttpParams().set('base', base).set('symbols', environment.bases.join(','));
      this.http.get(environment.fixerUri, { params }).subscribe(data => {
        localStorage.setItem(base, JSON.stringify(data['rates']));
      });
    });
  }

  getRates(base: string) {
    return JSON.parse(localStorage.getItem(base));
  }

}
