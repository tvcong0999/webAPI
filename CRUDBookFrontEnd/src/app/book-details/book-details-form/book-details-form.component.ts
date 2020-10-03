import { Component, OnInit } from '@angular/core';
import { BookDetailService } from 'src/app/shared/book-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styles: [],
})
export class BookDetailsFormComponent implements OnInit {
  constructor(
    public service: BookDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.formData.Id = 0;
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      this.service.formData = {
        Id: 0,
        Name: '',
        Author: '',
        Category: '',
        Publisher: '',
      };
    }
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0) this.insertRecord(form);
    else this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.service.putBookDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('update successfully!', 'UPDATE A BOOK');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  insertRecord(form: NgForm) {
    this.service.postBookDetail().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('add successfully!', 'ADD A BOOK');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
