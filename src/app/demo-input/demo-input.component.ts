import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss']
})
export class DemoInputComponent implements OnInit {
  @Input() name!: String;
  constructor() { }

  ngOnInit(): void {
  }

}
