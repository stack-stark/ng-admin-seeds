import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2plotAreaComponent } from './g2plot-area.component';

describe('G2plotAreaComponent', () => {
  let component: G2plotAreaComponent;
  let fixture: ComponentFixture<G2plotAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2plotAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2plotAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
