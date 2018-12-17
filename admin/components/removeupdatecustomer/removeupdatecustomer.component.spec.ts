import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveupdatecustomerComponent } from './removeupdatecustomer.component';

describe('RemoveupdatecustomerComponent', () => {
  let component: RemoveupdatecustomerComponent;
  let fixture: ComponentFixture<RemoveupdatecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveupdatecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveupdatecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
