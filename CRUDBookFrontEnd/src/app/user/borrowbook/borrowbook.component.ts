import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetailsListComponent } from 'src/app/book-details/book-details-list/book-details-list.component';
import { BookDetailsComponent } from 'src/app/book-details/book-details.component';
import { BorrowBook } from 'src/app/shared/book-detail.model';
import {
  BookDetailService,
  BorrowBookService,
} from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css'],
})
export class BorrowbookComponent implements OnInit {
  constructor(
    public serviceBorrow: BorrowBookService,
    public service: BookDetailService,
    private toastr: ToastrService,
  ) {}
  userID;

  ngOnInit(): void {
    this.serviceBorrow.BorrowBook.Id = 0;
    this.getAllBorrow();
  }

  getAllBorrow() {
    this.serviceBorrow.getAllBorrowBook().subscribe((res) => {
      this.serviceBorrow.allBorrow = res as BorrowBook[];
    });
  }

  getAllBookBorrow() {}
  borrowbook() {
    this.userID = JSON.parse(localStorage.getItem('currentuser')).Id;
    this.serviceBorrow.BorrowBook.iduser = this.userID;
    this.serviceBorrow.BorrowBook.date = new Date();
    console.log(this.serviceBorrow.BorrowBook.date);
    for(let book of this.service.listBorrowBook)
    this.serviceBorrow.BorrowBook.idbook = book.Id;
    this.serviceBorrow.postBorrowBook().subscribe((res) => {
        this.toastr.success('add successfully!', 'ADD A BOOK');
      },
      (err) => {
        console.log(err);
      }
      );
  }
}
