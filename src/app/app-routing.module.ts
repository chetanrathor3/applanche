import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './components/admin/admin-index/admin-index.component';
import { AddBlogComponent } from './components/admin/blog/add-blog/add-blog.component';
import { BlogListComponent } from './components/admin/blog/blog-list/blog-list.component';
import { ProjectslistComponent } from './components/admin/project/projectslist/projectslist.component';
import { TeamListComponent } from './components/admin/team/team-list/team-list.component';
import { UserlistComponent } from './components/admin/user/userlist/userlist.component';
import { BlogDetailsComponent } from './components/users/blog-details/blog-details.component';
import { BlogsComponent } from './components/users/blogs/blogs.component';
import { ConnectWithUsComponent } from './components/users/connect-with-us/connect-with-us.component';
import { IndexCardComponent } from './components/users/index-card/index-card.component';
import { IndexComponent } from './components/users/index/index.component';
import { MainIndexComponent } from './components/users/main-index/main-index.component';
import { MeetTheTeamComponent } from './components/users/meet-the-team/meet-the-team.component';

const routes: Routes = [
 {
 path:'',
 redirectTo:'index',
 pathMatch:'full'
 },
 {
  path:'',
  component:MainIndexComponent,
  children:[
    {
      path:'index',
      component:IndexComponent,
    },
    {
      path:'portfolio',
      component:IndexCardComponent,
    },
    {
      path:'blog',
      component:BlogsComponent,
      
    },
    {
      path:'blog/blogdetails',
      component:BlogDetailsComponent,
      
    },
    {
      path:'team',
      component:MeetTheTeamComponent,
    },
    {
      path:'contact',
      component:ConnectWithUsComponent,
    },
  
  ]
 },
 {
  path:'adminIndex',
  redirectTo:'usersList',
  pathMatch:'full'
 },
 {
  path:'adminIndex',
  component:AdminIndexComponent,
  children:[
    {
      path:'usersList',
      component:UserlistComponent
    },
    {
      path:'projectsList',
      component:ProjectslistComponent
    },
    {
      path:'bloglist',
      component:BlogListComponent
    },
    {
      path:'teamList',
      component:TeamListComponent
    },
    {
      path:'addBlog',
      component:AddBlogComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
