import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperMarioBrosPage } from './super-mario-bros.page';

describe('SuperMarioBrosPage', () => {
  let component: SuperMarioBrosPage;
  let fixture: ComponentFixture<SuperMarioBrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperMarioBrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
