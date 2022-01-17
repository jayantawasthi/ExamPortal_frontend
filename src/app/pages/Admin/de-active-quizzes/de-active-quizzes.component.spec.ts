import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeActiveQuizzesComponent } from './de-active-quizzes.component';

describe('DeActiveQuizzesComponent', () => {
  let component: DeActiveQuizzesComponent;
  let fixture: ComponentFixture<DeActiveQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeActiveQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeActiveQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
