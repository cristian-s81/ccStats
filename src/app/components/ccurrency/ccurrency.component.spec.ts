import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcurrencyComponent } from './ccurrency.component';

describe('CcurrencyComponent', () => {
  let component: CcurrencyComponent;
  let fixture: ComponentFixture<CcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
