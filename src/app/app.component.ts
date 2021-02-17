import { Component } from '@angular/core';
import students from './_files/students.json';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-file-read-angular';
  public studentList:{id:number,name:string, Age:number}[] = students;
}
