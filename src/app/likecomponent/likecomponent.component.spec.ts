import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikecomponentComponent } from './likecomponent.component';

describe('LikecomponentComponent', () => {
  let component: LikecomponentComponent;
  let fixture: ComponentFixture<LikecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikecomponentComponent]
    });
    fixture = TestBed.createComponent(LikecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
