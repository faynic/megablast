import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFloorViewComponent } from './shop-floor-view.component';

describe('ShopFloorViewComponent', () => {
  let component: ShopFloorViewComponent;
  let fixture: ComponentFixture<ShopFloorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFloorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFloorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
