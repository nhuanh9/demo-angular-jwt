import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClasssComponent } from './create-classs.component';

describe('CreateClasssComponent', () => {
  let component: CreateClasssComponent;
  let fixture: ComponentFixture<CreateClasssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClasssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClasssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
