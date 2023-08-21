import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface Book {
  name;
  price;
  author;
}

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  totalAngularPackages;
  constructor(private http: HttpClient) {}

  getLivros() {
    return this.http
      .get<any>('assets/books.json')
      .toPromise()
      .then((res) => <Book[]>res.data)
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  getBuscaCompleta(): any {
    return this.http.get<Book[]>('assets/books.json');
  }
}
