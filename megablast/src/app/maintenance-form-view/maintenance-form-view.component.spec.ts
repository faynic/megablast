import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFormViewComponent } from './maintenance-form-view.component';

describe('MaintenanceFormViewComponent', () => {
  let component: MaintenanceFormViewComponent;
  let fixture: ComponentFixture<MaintenanceFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
