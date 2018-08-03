import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthrizedComponent } from './not-authrized.component';

describe('NotAuthrizedComponent', () => {
  let component: NotAuthrizedComponent;
  let fixture: ComponentFixture<NotAuthrizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAuthrizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthrizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
