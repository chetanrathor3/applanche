import { Component, DoCheck, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css'],
})
export class AdminIndexComponent implements OnInit {
  heading: string = '';
  button:string = 'none';
  constructor(private router: Router) {
    router.events.subscribe(
      (event) => event instanceof NavigationEnd && this.handleRouteChange()
    );
  }
  handleRouteChange = () => {
    if (this.router.url.includes('usersList')) {
      this.heading = 'Users';
    } 
    else if (this.router.url.includes('projectsList')) {
      this.heading = 'Projects';
    }
    else if (this.router.url.includes('bloglist')) {
      this.heading = 'Blogs';
      this.button= 'block'
    }
  };

  ngOnInit(): void {}
}
