import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KofPage } from './kof.page';

describe('KofPage', () => {
  let component: KofPage;
  let fixture: ComponentFixture<KofPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
