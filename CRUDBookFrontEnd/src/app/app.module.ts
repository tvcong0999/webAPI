import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDetailsFormComponent } from './book-details/book-details-form/book-details-form.component';
import { BookDetailsListComponent } from './book-details/book-details-list/book-details-list.component';
import { BookDetailService } from './shared/book-detail.service';
import { LoginService } from './shared/book-detail.service';

import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  { path: 'book-details', component: BookDetailsComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookDetailsFormComponent,
    BookDetailsListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    NgbModule, 
    Ng2SearchPipeModule
  ],
  providers: [BookDetailService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
