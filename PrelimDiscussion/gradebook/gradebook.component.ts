import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName=""
  studentnumber=""
  prelim=0
  midterm=0
  final=0

  userName1=""
  studentnumber1=""
  prelim1=0
  midterm1=0
  final1=0
 
  userName2=""
  studentnumber2=""
  prelim2=0
  midterm2=0
  final2=0
}
