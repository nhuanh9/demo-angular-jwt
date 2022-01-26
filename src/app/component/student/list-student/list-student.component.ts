import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../model/student";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  listStudent: Student[] = [];
  xxx = new FormGroup({
    name: new FormControl(''),
    score: new FormControl(''),
    age: new FormControl(''),
    clazz: new FormControl(''),
  })

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.showAllStudent();
  }

  showAllStudent() {
    this.studentService.getAll().subscribe(rs => {
      this.listStudent = rs
      console.log(this.listStudent)
    }, error => {
      console.log(error)
    })
  }

  create() {
    console.log(this.xxx.value)
    let student = {
      name: this.xxx.value.name,
      score: this.xxx.value.score,
      age: this.xxx.value.age,
      clazz: {
        id: this.xxx.value.clazz
      },
    }
    this.studentService.create(student).subscribe(() => {
      alert("Thành công");
      this.showAllStudent()
    }, error => {
      console.log(error)
    })
  }
}
