import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/users/navbar/navbar.component';
import { HeroComponent } from './components/users/hero/hero.component';
import { IndexCardComponent } from './components/users/index-card/index-card.component';
import { HelpComponent } from './components/users/help/help.component';
import { SolutionsComponent } from './components/users/solutions/solutions.component';
import { TestimonialComponent } from './components/users/testimonial/testimonial.component';
import { FooterComponent } from './components/users/footer/footer.component';
import { ProjectDetailsComponent } from './components/users/project-details/project-details.component';
import { MeetTheTeamComponent } from './components/users/meet-the-team/meet-the-team.component';
import { ConnectWithUsComponent } from './components/users/connect-with-us/connect-with-us.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BlogsComponent } from './components/users/blogs/blogs.component';
import { BlogDetailsComponent } from './components/users/blog-details/blog-details.component';
import { AdminIndexComponent } from './components/admin/admin-index/admin-index.component';
import { UserlistComponent } from './components/admin/user/userlist/userlist.component';
import { UserProfileComponent } from './components/admin/user/user-profile/user-profile.component';
import { ProjectslistComponent } from './components/admin/project/projectslist/projectslist.component';
import { AddprojectComponent } from './components/admin/project/addproject/addproject.component';
import { BlogListComponent } from './components/admin/blog/blog-list/blog-list.component';
import { AddBlogComponent } from './components/admin/blog/add-blog/add-blog.component';
import { IndexComponent } from './components/users/index/index.component';
import { TestComponent } from './components/test/test.component';
import { MainIndexComponent } from './components/users/main-index/main-index.component';
import { MainBlogComponent } from './components/users/main-blog/main-blog.component';
import { TeamListComponent } from './components/admin/team/team-list/team-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    IndexCardComponent,
    HelpComponent,
    SolutionsComponent,
    TestimonialComponent,
    FooterComponent,
    ProjectDetailsComponent,
    MeetTheTeamComponent,
    ConnectWithUsComponent,
    BlogsComponent,
    BlogDetailsComponent,
    AdminIndexComponent,
    UserlistComponent,
    UserProfileComponent,
    ProjectslistComponent,
    AddprojectComponent,
    BlogListComponent,
    AddBlogComponent,
    IndexComponent,
    TestComponent,
    MainIndexComponent,
    MainBlogComponent,
    TeamListComponent,
    // MainIndexComponent,
    // InsertBlogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    HttpClientModule
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
