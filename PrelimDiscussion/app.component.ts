import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Binding';
  appName = 'This is an one-way data binding example!';

header1 = 'Number Interpolation';

  //Numeric Bindings
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

   //Property Binding
   clientName:string = 'Normalito Enriquez III';



   //Style Binding
   appliedCSSClass = 'green';
   notapplieCSSClass = false;
   myColor = 'red';


   //Two-way Data Binding
   showData($event:any){
     console.log("Button is Clicked!");
   }
   //Two-way data binding demo
   getMessage(msg:any){
     alert(msg)
   }

   

   //Keyup Function
   getData(data:any){
     console.warn(data)
   }


   isLogIn: boolean = true;
   isLogOut: boolean = false;

  
   
   
list = [1,2,3,4,5];
studentArr: any[] =
[
  {"id": 1, "name": "Student1"}, 
  {"id": 2, "name": "Student2"},
   {"id": 3, "name": "Student3"},
    {"id": 4, "name":"Student4"},
];
trackByData(index: number, studentArr:any): number
{
  return studentArr.id;
}
user = 
[
  {firstName: "Normalito", lastName: "Enriquez", email: "terd.enriquez@test.com", role: "User"},
   {firstName: "Kristian", lastName:"Barba", email: "kristian.baraba@test.com", role: "Admin"},
    {firstName: "Emmett", lastName: "Lao", email:"emmett.lao@test.com", role: "Admin"}, 
    {firstName: "Jem", lastName: "Manabat", email: "jem.manabat@test.com",role: "User"}, 
    {firstName: "Joseph", lastName: "Yap", email: "joseph.yap@test.com", role: "User"},
]

logInName = "admin";
logInName2 ="user";

}


