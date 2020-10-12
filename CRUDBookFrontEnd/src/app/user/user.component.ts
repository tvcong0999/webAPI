import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}
  public user = '';
  routerlink = "/user/borrowbook";

  ngOnInit(): void {
    this.user = localStorage.getItem('currentuser');
    $('.username').html(JSON.parse(this.user).user);
  }
  transferLink(event){
   $("."+$(event.currentTarget).attr('class')).css("background-color", "rgb(221, 230, 230)");
    $("#"+event.currentTarget.id).css("background-color", "rgb(112, 156, 156)");
  }
}
