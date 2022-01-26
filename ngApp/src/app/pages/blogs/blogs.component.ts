import { Component, OnInit } from '@angular/core';
import { BlogDataService } from 'src/app/services/blog-data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(private _blogDataService: BlogDataService) {}

  public blogs: any = [];
  ngOnInit(): void {
    this.blogs = this._blogDataService.getBlogs().subscribe(
      (res) => (this.blogs = res.result),
      (err) => console.log(err)
    );
  }
}
