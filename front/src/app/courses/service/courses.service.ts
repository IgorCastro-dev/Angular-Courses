import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }
  list():Course[]{
    return [{id:1,name:"ingles",category:"linguas"},{id:1,name:"matemática",category:"exatas"}];
  }
}
