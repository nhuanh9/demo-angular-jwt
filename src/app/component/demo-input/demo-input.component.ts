import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss']
})
export class DemoInputComponent implements OnInit {
  @Input() name!: String;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap)=> {
      console.log(paramMap.get('id'));
    }, error => {
      console.log(error)
    })
  }

}
