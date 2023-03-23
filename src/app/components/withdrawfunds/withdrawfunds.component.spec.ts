import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawfundsComponent } from './withdrawfunds.component';

describe('WithdrawfundsComponent', () => {
  let component: WithdrawfundsComponent;
  let fixture: ComponentFixture<WithdrawfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawfundsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrawfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
