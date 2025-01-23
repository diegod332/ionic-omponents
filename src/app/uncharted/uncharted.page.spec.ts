import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnchartedPage } from './uncharted.page';

describe('UnchartedPage', () => {
  let component: UnchartedPage;
  let fixture: ComponentFixture<UnchartedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnchartedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
