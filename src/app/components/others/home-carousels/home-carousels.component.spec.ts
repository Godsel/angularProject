import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarouselsComponent } from './home-carousels.component';

describe('HomeCarouselsComponent', () => {
  let component: HomeCarouselsComponent;
  let fixture: ComponentFixture<HomeCarouselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarouselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
