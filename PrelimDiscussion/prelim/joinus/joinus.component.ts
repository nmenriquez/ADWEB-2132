import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Fname="";
  Lname="";
  Email="";
  School="";

    getFname(data: any)  {
      this.Fname = data;
    }
    getLname(data: any) {
      this.Lname = data;
    }
    getEmail(data: any) {
      this.Email = data;
    }
    getSchool(data: any) {
      this.School = data;
    }
}
 
