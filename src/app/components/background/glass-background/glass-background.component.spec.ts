import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassBackgroundComponent } from './glass-background.component';

describe('GlassBackgroundComponent', () => {
  let component: GlassBackgroundComponent;
  let fixture: ComponentFixture<GlassBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
