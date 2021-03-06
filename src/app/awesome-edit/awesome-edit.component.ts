import { Component, OnInit } from '@angular/core';
import {IPost} from '../model/post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.scss']
})
export class AwesomeEditComponent implements OnInit {
  post: IPost;
  postForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      tag: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', [Validators.required, Validators.minLength(4)]],
      descriptions: ['', [Validators.required, Validators.minLength(10)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.post = next;
        this.postForm.patchValue(this.post);
      },
      error => {
        console.log(error);
        this.post = null;
      }
    );
  }
  onSubmit() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      const data = {
        ...this.post,
        ...value
      };
      this.postService.updatePost(data).subscribe(
        next => {
          this.router.navigate(['/awesome']);
        },
        error => console.log(error)
      );
    }
  }
}
