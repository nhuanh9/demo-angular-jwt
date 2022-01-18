import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss']
})
export class DemoPipeComponent implements OnInit {
  name = "Đào Như Anh";
  arr = ['Dũng', 'LA', 'Vịt', 'Én'];
  obj = {
    id: '1',
    name:'NAL',
    des: 'Nghèo'
  }
  constructor() { }

  ngOnInit(): void {
    console.log("Đang init!")
  }


}
