import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/book-detail.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.user.subscribe((res)=>{
      console.log("res");
      // $(".username").html(res);
    });
  }

}
