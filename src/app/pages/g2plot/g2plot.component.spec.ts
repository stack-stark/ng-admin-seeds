import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2plotComponent } from './g2plot.component';

describe('G2plotComponent', () => {
  let component: G2plotComponent;
  let fixture: ComponentFixture<G2plotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2plotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2plotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
