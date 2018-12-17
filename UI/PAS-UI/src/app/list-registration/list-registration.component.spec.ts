import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistrationComponent } from './list-registration.component';

describe('ListRegistrationComponent', () => {
  let component: ListRegistrationComponent;
  let fixture: ComponentFixture<ListRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
