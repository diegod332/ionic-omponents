import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedDeadRedemptionPage } from './red-dead-redemption.page';

describe('RedDeadRedemptionPage', () => {
  let component: RedDeadRedemptionPage;
  let fixture: ComponentFixture<RedDeadRedemptionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RedDeadRedemptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
