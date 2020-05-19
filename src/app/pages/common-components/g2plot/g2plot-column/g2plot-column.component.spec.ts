import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2plotColumnComponent } from './g2plot-column.component';

describe('G2plotColumnComponent', () => {
  let component: G2plotColumnComponent;
  let fixture: ComponentFixture<G2plotColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2plotColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2plotColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
