import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovaiceboxComponent } from './sovaicebox.component';

describe('SovaiceboxComponent', () => {
  let component: SovaiceboxComponent;
  let fixture: ComponentFixture<SovaiceboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SovaiceboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SovaiceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
