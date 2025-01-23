import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkSoulsPage } from './dark-souls.page';

describe('DarkSoulsPage', () => {
  let component: DarkSoulsPage;
  let fixture: ComponentFixture<DarkSoulsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSoulsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
