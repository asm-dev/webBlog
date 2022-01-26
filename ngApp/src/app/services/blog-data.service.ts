import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogDataService {
  constructor(private http: HttpClient) {}

  private _addBlogUrl = 'http://localhost:3000/api/addblog';
  private _getBlogUrl = 'http://localhost:3000/api/blogs';

  addBlog(blog: any) {
    return this.http.post<any>(this._addBlogUrl, blog);
  }

  getBlogs() {
    return this.http.get<any>(this._getBlogUrl);
  }
}
