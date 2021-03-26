import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDetailsViewComponent } from './machine-details-view.component';

describe('MachineDetailsViewComponent', () => {
  let component: MachineDetailsViewComponent;
  let fixture: ComponentFixture<MachineDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
