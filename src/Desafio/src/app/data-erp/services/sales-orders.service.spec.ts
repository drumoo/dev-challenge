import { TestBed } from '@angular/core/testing';

import { SalesOrdersService } from './sales-orders.service';

describe('SalesOrdersService', () => {
  let service: SalesOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
