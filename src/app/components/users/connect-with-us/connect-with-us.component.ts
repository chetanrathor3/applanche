import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { skipLast } from 'rxjs';
// import { } from 'googlemaps';

@Component({
  selector: 'app-connect-with-us',
  templateUrl: './connect-with-us.component.html',
  styleUrls: ['./connect-with-us.component.css']
})
export class ConnectWithUsComponent implements OnInit {

  constructor() { }

ngOnInit(): void {
}
display : any;
center : google.maps.LatLngLiteral= {
  lat : 24,
  lng : 12
}
zoom = 4;

}
