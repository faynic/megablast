import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintenanceLogComponent } from './add-maintenance-log.component';

describe('AddMaintenanceLogComponent', () => {
  let component: AddMaintenanceLogComponent;
  let fixture: ComponentFixture<AddMaintenanceLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaintenanceLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaintenanceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
