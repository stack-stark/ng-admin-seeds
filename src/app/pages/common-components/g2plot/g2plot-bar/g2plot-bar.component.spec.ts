import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G2plotBarComponent } from './g2plot-bar.component';

describe('G2plotBarComponent', () => {
  let component: G2plotBarComponent;
  let fixture: ComponentFixture<G2plotBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G2plotBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G2plotBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
