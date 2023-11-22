import { CoursesService } from './../service/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent{
  courses:Course[] = [];
  //coursesService: CoursesService;
  displayedColumns =["name","category"];
  constructor(private coursesService: CoursesService){
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }
}
