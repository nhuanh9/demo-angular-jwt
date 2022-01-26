import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://localhost:8080/api/students';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.url);
  }

  create(student: Student): Observable<any> {
    return this.httpClient.post<any>(this.url, student);
  }

  edit(student: Student, id: string): Observable<any> {
    return this.httpClient.put<any>(this.url + `/${id}`, student);
  }

  getById(id: string): Observable<Student> {
    return this.httpClient.get<Student>(this.url + `/${id}`)
  }
}
