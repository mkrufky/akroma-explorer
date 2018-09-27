import { Injectable } from '@angular/core';
import { TypeSafeWeb3 } from 'typesafe-web3';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
@Injectable()
export class TransactionService {
    constructor(public typeSafeWeb3: TypeSafeWeb3) {
    }

    public async getTransaction(hash: string): Promise<Transaction> {
        console.log('called: getTransaction');
        const result = await this.typeSafeWeb3.getTransactionByHash(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }

    public async getTransactionCountByAddress(hash: string): Promise<number> {
        console.log('called: getTransactionCountByAddress');
        const result = await this.typeSafeWeb3.getTransactionCountByAddress(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }

    public async getTransactionsAndBlockByAddress(hash: string, page: number): Promise<Transaction[]> {
        console.log('called: getTransactionsAndBlockByAddress');
        const result = await this.typeSafeWeb3.getTransactionsAndBlockByAddress(hash, page);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }

    public async getTransactionsByAddress(hash: string): Promise<string[]> {
        console.log('called: getTransactionsByAddress');
        const result = await this.typeSafeWeb3.getTransactionsByAddress(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get transactions');
    }
}
