import { TestBed } from '@angular/core/testing';

import { DataCoffeeService } from './data-coffee.service';

describe('DataCoffeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCoffeeService = TestBed.get(DataCoffeeService);
    expect(service).toBeTruthy();
  });
});
