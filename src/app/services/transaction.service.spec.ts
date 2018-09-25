import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionService = TestBed.get(TransactionService);
    // tslint:disable-next-line:no-unused-expression
    expect(service).to.be.true;
  });
});
