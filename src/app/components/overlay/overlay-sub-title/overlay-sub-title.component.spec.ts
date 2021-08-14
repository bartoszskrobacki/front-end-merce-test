import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaySubTitleComponent } from './overlay-sub-title.component';

describe('OverlaySubTitleComponent', () => {
  let component: OverlaySubTitleComponent;
  let fixture: ComponentFixture<OverlaySubTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlaySubTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
