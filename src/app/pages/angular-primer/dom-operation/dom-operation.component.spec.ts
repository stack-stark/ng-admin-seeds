import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomOperationComponent } from './dom-operation.component';

describe('DomOperationComponent', () => {
  let component: DomOperationComponent;
  let fixture: ComponentFixture<DomOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
