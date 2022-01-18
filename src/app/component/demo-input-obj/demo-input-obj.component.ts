import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-input-obj',
  templateUrl: './demo-input-obj.component.html',
  styleUrls: ['./demo-input-obj.component.scss']
})
export class DemoInputObjComponent implements OnInit {
  @Input() object!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
