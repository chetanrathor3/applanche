import { Component, OnInit } from '@angular/core';
import { InsertBlogService } from 'src/app/services/insert-blog.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  data = {
    blogName: 'Rashtrapati Bhavan',
    blogTitle: 'The most important place of india',
    blogCategory: 'General',
    blogDescription:
      "rāsh-truh-puh-ti bha-vun; lit. 'Presidential Palace'; originally Viceroy's House and later Government House) is the official residence of the President of India at the western end of Rajpath, Raisina Hill, New Delhi, India. Rashtrapati Bhavan may refer to only the 340-room main building that has the president's official residence, including reception halls, guest rooms and offices, also called the mansion; it may also refer to the entire 130-hectare (320-acre) Presidential Estate that additionally includes the presidential gardens, large open spaces, residences of bodyguards and staff, stables, other offices and utilities within its perimeter walls. In terms of area, it is the largest residence of any head of state in India.[3] The other presidential homes are the Rashtrapati Nilayam in Hyderabad, Telangana and The Retreat Building in Shimla, Himachal Pradesh",
  };
  constructor(private insert: InsertBlogService) {}

  clickme(data: any) {
    this.insert.insertBlog(data).subscribe((data)=>{
      console.log(data);
      
    })
  }
  ngOnInit(): void {}
  showFormData(formvalue:any){
    console.warn(formvalue);
    
  }
}
