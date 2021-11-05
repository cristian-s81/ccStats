import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcstatsComponent } from './ccstats.component';

describe('CcstatsComponent', () => {
  let component: CcstatsComponent;
  let fixture: ComponentFixture<CcstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcstatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
