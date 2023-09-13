import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviepostercomponentComponent } from './moviepostercomponent.component';

describe('MoviepostercomponentComponent', () => {
  let component: MoviepostercomponentComponent;
  let fixture: ComponentFixture<MoviepostercomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviepostercomponentComponent]
    });
    fixture = TestBed.createComponent(MoviepostercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
