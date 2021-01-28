import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wel-Come to Angular code...';
  myStyle = 'red';
  num = 3;
  myData = [
    {
      name: 'Hitesh Ahire',
      addr: 'Dabli'
    },
    {
      name: 'Ganesh Nikam',
      addr: 'Malegaon'
    },
    {
      name: 'Nikita Morankar',
      addr: 'Pachora'
    }
  ];
}
