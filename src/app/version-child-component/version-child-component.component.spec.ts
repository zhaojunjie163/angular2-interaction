import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionChildComponentComponent } from './version-child-component.component';

describe('VersionChildComponentComponent', () => {
  let component: VersionChildComponentComponent;
  let fixture: ComponentFixture<VersionChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
