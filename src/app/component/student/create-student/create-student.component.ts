import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  xxx = new FormGroup({
    name: new FormControl(''),
    score: new FormControl(''),
    age: new FormControl(''),
    clazz: new FormControl(''),
  })
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
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
    this.studentService.create(student).subscribe(()=> {
      alert("Thành công");
    }, error => {
      console.log(error)
    })
  }
}
