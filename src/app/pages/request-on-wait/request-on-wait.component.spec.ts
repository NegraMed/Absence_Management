import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOnWaitComponent } from './request-on-wait.component';

describe('RequestOnWaitComponent', () => {
  let component: RequestOnWaitComponent;
  let fixture: ComponentFixture<RequestOnWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOnWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOnWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
