import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReportViewComponent } from './daily-report-view.component';

describe('DailyReportViewComponent', () => {
  let component: DailyReportViewComponent;
  let fixture: ComponentFixture<DailyReportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyReportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
