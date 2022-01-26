import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  addBlogData = {
    blogImg: '',
    blogTitle: '',
    blogText: '',
    bloggerImg: '',
    bloggerName: '',
    bloggerJob: '',
  };

  constructor(private _blogDataService: BlogDataService) {}

  ngOnInit(): void {}

  addBlog() {
    this._blogDataService.addBlog(this.addBlogData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
