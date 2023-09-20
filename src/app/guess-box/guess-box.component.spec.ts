import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessBoxComponent } from './guess-box.component';

describe('GuessBoxComponent', () => {
  let component: GuessBoxComponent;
  let fixture: ComponentFixture<GuessBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessBoxComponent]
    });
    fixture = TestBed.createComponent(GuessBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
