import { TestBed } from '@angular/core/testing';

import { Servico01Service } from './servico01.service';

describe('Servico01Service', () => {
  let service: Servico01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servico01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
