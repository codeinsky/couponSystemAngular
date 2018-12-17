import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUpdateCouponComponent } from './remove-update-coupon.component';

describe('RemoveUpdateCouponComponent', () => {
  let component: RemoveUpdateCouponComponent;
  let fixture: ComponentFixture<RemoveUpdateCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveUpdateCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUpdateCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
