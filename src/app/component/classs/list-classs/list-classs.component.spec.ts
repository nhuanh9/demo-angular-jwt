import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClasssComponent } from './list-classs.component';

describe('ListClasssComponent', () => {
  let component: ListClasssComponent;
  let fixture: ComponentFixture<ListClasssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClasssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClasssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
