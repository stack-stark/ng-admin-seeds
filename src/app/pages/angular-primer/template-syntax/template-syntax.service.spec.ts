import { TestBed } from '@angular/core/testing';

import { TemplateSyntaxService } from './template-syntax.service';

describe('TemplateSyntaxService', () => {
  let service: TemplateSyntaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateSyntaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
