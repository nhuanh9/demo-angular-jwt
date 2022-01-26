import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentService} from "../../../service/student.service";
import {FormControl, FormGroup} from "@angular/forms";

//B1: viết thêm và service cái getById với hàm edit
//B2: tạo component, sửa routing, tạo form
//B3: lấy id từ trên đường dẫn về rồi gọi cái getById để lấy được dữ liệu
//B4: đổ cái dữ liệu lấy được lên form
//B5: viết hàm xử lý form
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  xxx = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    score: new FormControl(''),
    age: new FormControl(''),
    clazz: new FormControl(''),
  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent() {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      console.log(id)
      // @ts-ignore
      this.studentService.getById(id).subscribe(res => {
        console.log(res)
        this.xxx = new FormGroup({
          id: new FormControl(res.id),
          name: new FormControl(res.name),
          score: new FormControl(res.score),
          age: new FormControl(res.age),
          clazz: new FormControl(res.clazz.id),
        })
      })
    });
  }
  save() {
    console.log(this.xxx.value)
    let student = {
      id: this.xxx.value.id,
      name: this.xxx.value.name,
      score: this.xxx.value.score,
      age: this.xxx.value.age,
      clazz: {
        id: this.xxx.value.clazz
      },
    }
    this.studentService.edit(student, '1').subscribe(()=> {
      alert("Thành công");
    }, error => {
      console.log(error)
    })
  }
}
