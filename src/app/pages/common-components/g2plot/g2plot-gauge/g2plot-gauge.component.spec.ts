import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2plotGaugeComponent } from './g2plot-gauge.component';

describe('G2plotGaugeComponent', () => {
  let component: G2plotGaugeComponent;
  let fixture: ComponentFixture<G2plotGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2plotGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2plotGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
