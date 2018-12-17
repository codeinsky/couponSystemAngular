import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyCouponsComponent } from './show-my-coupons.component';

describe('ShowMyCouponsComponent', () => {
  let component: ShowMyCouponsComponent;
  let fixture: ComponentFixture<ShowMyCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMyCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
