import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareBackgroundComponent } from './square-background.component';

describe('SquareBackgroundComponent', () => {
  let component: SquareBackgroundComponent;
  let fixture: ComponentFixture<SquareBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
