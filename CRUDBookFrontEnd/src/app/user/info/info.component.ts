import { Component, OnInit } from '@angular/core';
import { BookDetailService, BorrowBookService } from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(public serviceBorrow: BorrowBookService,
    public service: BookDetailService,) { }
    userID;
    username;
    inforBorrow = {
      username:'',
      nameBook:'',
      date:'',
    };
  ngOnInit(): void {

  }
  display(){
    this.userID = JSON.parse(localStorage.getItem('currentuser')).Id;
    this.username = JSON.parse(localStorage.getItem('currentuser')).user;
  }

}
