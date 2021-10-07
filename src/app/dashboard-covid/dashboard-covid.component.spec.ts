import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCovidComponent } from './dashboard-covid.component';

describe('DashboardCovidComponent', () => {
  let component: DashboardCovidComponent;
  let fixture: ComponentFixture<DashboardCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
