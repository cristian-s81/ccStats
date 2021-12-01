import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcentryComponent } from './ccentry.component';

describe('CcentryComponent', () => {
  let component: CcentryComponent;
  let fixture: ComponentFixture<CcentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
