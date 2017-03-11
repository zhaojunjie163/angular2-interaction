import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownViewChildParentComponentComponent } from './countdown-view-child-parent-component.component';

describe('CountdownViewChildParentComponentComponent', () => {
  let component: CountdownViewChildParentComponentComponent;
  let fixture: ComponentFixture<CountdownViewChildParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownViewChildParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownViewChildParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
