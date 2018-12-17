import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteCompanyComponent } from './craete-company.component';

describe('CraeteCompanyComponent', () => {
  let component: CraeteCompanyComponent;
  let fixture: ComponentFixture<CraeteCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraeteCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraeteCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
