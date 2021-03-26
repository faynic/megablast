import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFloorViewComponent } from './front-floor-view.component';

describe('FrontFloorViewComponent', () => {
  let component: FrontFloorViewComponent;
  let fixture: ComponentFixture<FrontFloorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontFloorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontFloorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
