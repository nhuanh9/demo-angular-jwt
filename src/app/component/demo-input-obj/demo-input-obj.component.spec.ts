import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputObjComponent } from './demo-input-obj.component';

describe('DemoInputObjComponent', () => {
  let component: DemoInputObjComponent;
  let fixture: ComponentFixture<DemoInputObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInputObjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
