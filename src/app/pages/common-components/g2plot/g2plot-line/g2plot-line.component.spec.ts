import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2plotLineComponent } from './g2plot-line.component';

describe('G2plotLineComponent', () => {
  let component: G2plotLineComponent;
  let fixture: ComponentFixture<G2plotLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2plotLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2plotLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
