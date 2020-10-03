import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/book-detail.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/shared/book-detail.model';
import { ElementSchemaRegistry } from '@angular/compiler';
import { logging } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public serviceLogin: LoginService) {}
  public routerlink = '';
  ngOnInit(): void {
    this.serviceLogin.getAllUserToList();
    this.rememberLogin();
  }
  check(form: NgForm) {
    let index = false;
    for (let u of this.serviceLogin.list) {
      if (
        this.serviceLogin.formSign.user == u.user &&
        this.serviceLogin.formSign.pass == u.pass
      ) {
        this.routerlink = '/book-details';
        index = true;
      }
    }
    return index;
  }
  SignIn(form: NgForm) {
    if (!this.check(form)) {
      $('#error').html('user or pass is not correct!');
      form.resetForm();
    } else {
      $('#error').html('');
      this.serviceLogin.sendData();
      console.log(this.serviceLogin.formSign);
      if ($('#checkRemember').is(':checked')) {
        localStorage.setItem(
          'login',
          JSON.stringify(this.serviceLogin.formSign)
        );
      }
    }
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      this.serviceLogin.formSign = {
        Id: 0,
        user: '',
        pass: '',
      };
    }
  }
  rememberLogin() {
    if (typeof localStorage.getItem('login') != 'undefined') {
      let login = JSON.parse(localStorage.getItem('login'));
      this.serviceLogin.formSign = {
        Id: 0,
        user: login.user,
        pass: login.pass,
      };
    }
  }
}
