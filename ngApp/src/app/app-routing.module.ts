import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/blogs',
    pathMatch: 'full'
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'blogs/addblog',
    component: AddBlogComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [BlogsComponent, AddBlogComponent];
