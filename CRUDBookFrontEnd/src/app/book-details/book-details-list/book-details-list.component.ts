import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from 'src/app/shared/book-detail.model';
import { BookDetailService } from 'src/app/shared/book-detail.service';
import * as $ from 'jquery';
import { sequence } from '@angular/animations';



@Component({
  selector: 'app-book-details-list',
  templateUrl: './book-details-list.component.html',
  styleUrls: ['./book-details-list.component.css'],
})
export class BookDetailsListComponent implements OnInit {
  constructor(
    public service: BookDetailService,
    private toastr: ToastrService,
    
  ) {}
  pageOfItems: Array<any>;
  public listData = [];
  page = 1;
  pageSize =5;
  searchText;
  ngOnInit(): void {
    this.loadListData();
    
  }
  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteBookDetail(id).subscribe(
        (res) => {
          this.service.refreshList();
          this.toastr.warning('delete successfully', 'DELETE A BOOK');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  search() {
    var str = $('.mytext').val().toString();
    var s = str.toLowerCase();
    var myList = [];
    for (let book of this.listData) {
      if (
        book.Name.toLowerCase().includes(s) ||
        book.Author.toLowerCase().includes(s) ||
        book.Category.toLowerCase().includes(s) ||
        book.Publisher.toLowerCase().includes(s)
      )
        myList.push(book);
    }
    this.page = 1;
    this.service.list = myList;
    if (str == '') this.service.refreshList();
  }
  // pagination(lengthBook) {
  //   let str =
  //     '<li class="page-item"><a (click)="setPage(1)" href="#" class="page-link" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a></li>';

  //   var page = Math.ceil(lengthBook / 4);
  //   for (let i = 1; i <= page; i++) {
  //     str +=
  //       '<li class="page-item"><a (click)="setPage(currentPage)"class="page-link" href="#">' +
  //       i +
  //       '</a></li>';
  //   }
  //   str +=
  //     ' <li class="page-item"><a (click)="setPage(page)" href="#" class="page-link" aria-label="Next"><span aria-hidden="true">&raquo;</span> <span class="sr-only">Next</span></a></li>';

  //   $('.pagination').append(str);
  // }
  loadListData() {
    this.service.getAllBook().subscribe((res) => {
      for (let book of res as BookDetail[]) this.listData.push(book);
      this.service.list = this.listData;
     // this.pagination(this.listData.length);
    });
  }
 
}
