import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2plotPieComponent } from './g2plot-pie.component';

describe('G2plotPieComponent', () => {
  let component: G2plotPieComponent;
  let fixture: ComponentFixture<G2plotPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2plotPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2plotPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
