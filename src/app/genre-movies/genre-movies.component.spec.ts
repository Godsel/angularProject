import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreMoviesComponent } from './genre-movies.component';

describe('GenreMoviesComponent', () => {
  let component: GenreMoviesComponent;
  let fixture: ComponentFixture<GenreMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
