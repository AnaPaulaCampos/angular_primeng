import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  name;
  price;
  author;
}

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) {}

  getLivros() {
    return this.http.get<any>('assets/books.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => { return data; });
    }
}
