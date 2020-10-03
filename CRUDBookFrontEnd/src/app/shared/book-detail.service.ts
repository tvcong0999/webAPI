import { BookDetail } from './book-detail.model';
import { Login } from './book-detail.model';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookDetailService {
  formData: BookDetail = new BookDetail();

  readonly rootURL = 'http://localhost:62210/api';
  list: BookDetail[];
  bookId: BookDetail;

  constructor(private http: HttpClient) {}

  postBookDetail() {
    return this.http.post(`${this.rootURL}/BookDetails`, this.formData);
  }
  putBookDetail() {
    return this.http.put(
      `${this.rootURL}/BookDetails/${this.formData.Id}`,
      this.formData
    );
  }
  deleteBookDetail(id) {
    return this.http.delete(`${this.rootURL}/BookDetails/${id}`);
  }

  // refreshList() {
  //   this.http
  //     .get(`${this.rootURL}/BookDetails/`)
  //     .toPromise()
  //     .then((res) => (this.list = res as BookDetail[]));
  // }
  getSomeBook(start, end) {
    let listBook = [];
    for (let i = start; i < end; i++) {
      this.http
        .get(`${this.rootURL}/BookDetails/${i}`)
        .toPromise()
        .then((res) => (listBook[i] = res as BookDetail));
      this.list = listBook;
    }
  }
  getBookId(id) {
    this.http
      .get(`${this.rootURL}/BookDetails/${id}`)
      .toPromise()
      .then((res) => {this.bookId = res as BookDetail;
      });
  }

  getAllBook() {
    return this.http.get(`${this.rootURL}/BookDetails/`);
  }

  refreshList() {
    this.getAllBook()
      .toPromise()
      .then((res) => (this.list = res as BookDetail[]));
  }

  searchBookDetail(id) {
    this.http
      .get(`${this.rootURL}/BookDetails//${id}`)
      .toPromise()
      .then((res) => (this.formData = res as BookDetail));
  }
}

export class LoginService {
  formSign: Login = new Login();
  readonly rootURL = 'http://localhost:62210/api';
  list: Login[];
  @Output() user = new EventEmitter();
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get(`${this.rootURL}/Logins/`);
  }

  getAllUserToList() {
    this.http
      .get(`${this.rootURL}/Logins/`)
      .toPromise()
      .then((res) => (this.list = res as Login[]));
  }
  sendData(){
    this.user.emit(this.formSign);
  }
}
