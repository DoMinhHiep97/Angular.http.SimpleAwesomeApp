import { Component, OnInit } from '@angular/core';
import {IPost} from '../post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  postList: IPost[] = [];
  postForm: FormGroup;
  constructor(
    private postService: PostService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      tag: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', [Validators.required, Validators.minLength(4)]],
      descriptions: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.postService
      .getPosts()
      .subscribe(next => (this.postList = next), error => (this.postList = []));
  }
  onSubmit()  {
    if (this.postForm.valid)  {
      const {value} = this.postForm;
      this.postService.createPost(value)
        .subscribe(next => {
          this.postList.unshift(next);
          this.postForm.reset({
            tag: '',
            url: '',
            descriptions: ''
          });
        }, error => console.log(error));
    }
  }
  deletePost(i) {
    const post = this.postList[i];
    this.postService.deletePost(post.id).subscribe(() => {
      this.postList = this.postList.filter(t => t.id !== post.id);
    });
  }
}
