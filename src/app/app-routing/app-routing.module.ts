import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from '../book/book.component';
import {BookDetailComponent} from '../book-detail/book-detail.component';
import {BookEditComponent} from '../book-edit/book-edit.component';



const routes: Routes = [{
  path: 'awesome',
  component: BookComponent
}, {
  path: 'awesome/:id',
  component: BookDetailComponent
}, {
  path: 'awesome/:id/edit',
  component: BookEditComponent
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
