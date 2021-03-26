import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceLogsViewComponent } from './maintenance-logs-view.component';

describe('MaintenanceLogsViewComponent', () => {
  let component: MaintenanceLogsViewComponent;
  let fixture: ComponentFixture<MaintenanceLogsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceLogsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceLogsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
