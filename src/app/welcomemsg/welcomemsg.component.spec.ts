import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomemsgComponent } from './welcomemsg.component';

describe('WelcomemsgComponent', () => {
  let component: WelcomemsgComponent;
  let fixture: ComponentFixture<WelcomemsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomemsgComponent]
    });
    fixture = TestBed.createComponent(WelcomemsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
