import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinePartsComponent } from './machine-parts.component';

describe('MachinePartsComponent', () => {
  let component: MachinePartsComponent;
  let fixture: ComponentFixture<MachinePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
