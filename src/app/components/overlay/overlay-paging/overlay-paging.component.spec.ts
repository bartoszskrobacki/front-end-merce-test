import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPagingComponent } from './overlay-paging.component';

describe('OverlayPagingComponent', () => {
  let component: OverlayPagingComponent;
  let fixture: ComponentFixture<OverlayPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayPagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
