import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertBlogService {
url = 'http://localhost:4000/'

  constructor(private http:HttpClient) { }
  insertBlog(data:any){
    return this.http.post(this.url,data)
  }
}
