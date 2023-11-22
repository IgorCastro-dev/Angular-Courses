import { CoursesService } from './../service/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable, first, tap } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent{
  courses$:Observable<Course[]>;
  //coursesService: CoursesService;
  displayedColumns =["name","category"];
  constructor(private coursesService: CoursesService){
    this.courses$ = this.coursesService.list()
    .pipe(
      first(),
      tap(courses=>console.log(courses)));
  }
}
