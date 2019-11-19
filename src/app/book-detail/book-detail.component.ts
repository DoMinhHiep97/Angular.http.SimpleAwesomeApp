import { Component, OnInit } from '@angular/core';
import {IPost} from '../model/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  post: IPost;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => (this.post = next),
      error => {
        console.log(error);
        this.post = null;
      }
    );
  }

}