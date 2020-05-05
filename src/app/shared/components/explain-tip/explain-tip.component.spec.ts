import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainTipComponent } from './explain-tip.component';

describe('ExplainTipComponent', () => {
  let component: ExplainTipComponent;
  let fixture: ComponentFixture<ExplainTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplainTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
