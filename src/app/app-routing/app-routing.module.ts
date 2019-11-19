import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AwesomeComponent } from '../awesome/awesome.component';
import {AwesomeDetailComponent} from '../awesome-detail/awesome-detail.component';
import {AwesomeEditComponent} from '../awesome-edit/awesome-edit.component';



const routes: Routes = [{
  path: 'awesome',
  component: AwesomeComponent
}, {
  path: 'awesome/:id',
  component: AwesomeDetailComponent
}, {
  path: 'awesome/:id/edit',
  component: AwesomeEditComponent
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
