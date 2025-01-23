import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GearsOfWarPage } from './gears-of-war.page';

describe('GearsOfWarPage', () => {
  let component: GearsOfWarPage;
  let fixture: ComponentFixture<GearsOfWarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GearsOfWarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
