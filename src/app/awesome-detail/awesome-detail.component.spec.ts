import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeDetailComponent } from './awesome-detail.component';

describe('BookDetailComponent', () => {
  let component: AwesomeDetailComponent;
  let fixture: ComponentFixture<AwesomeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
