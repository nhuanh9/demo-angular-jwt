import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClasssComponent } from './detail-classs.component';

describe('DetailClasssComponent', () => {
  let component: DetailClasssComponent;
  let fixture: ComponentFixture<DetailClasssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClasssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClasssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
