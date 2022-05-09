import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovahavenComponent } from './sovahaven.component';

describe('SovahavenComponent', () => {
  let component: SovahavenComponent;
  let fixture: ComponentFixture<SovahavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SovahavenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SovahavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
