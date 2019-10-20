import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowFinderComponent } from './tvshow-finder.component';

describe('TvshowFinderComponent', () => {
  let component: TvshowFinderComponent;
  let fixture: ComponentFixture<TvshowFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
