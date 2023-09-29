import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortExpensesComponent } from './sort-expenses.component';

describe('SortExpensesComponent', () => {
  let component: SortExpensesComponent;
  let fixture: ComponentFixture<SortExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortExpensesComponent]
    });
    fixture = TestBed.createComponent(SortExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
