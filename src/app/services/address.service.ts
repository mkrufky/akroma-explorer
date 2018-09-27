import { Injectable } from '@angular/core';
import Utils from 'typesafe-web3/dist/lib/utils';
import { AkromaService } from './akroma.service';
@Injectable()
export class AddressService {
    constructor(private akroma: AkromaService) {
    }

    public async getBalance(hash: string): Promise<string> {
        console.log('called: getBalance');
        const result = await this.akroma.connect().getBalance(hash);
        if (result.ok) {
            return Utils.fromWei(result.data!, 'ether').toString();
        }
        return Promise.reject('could not get balance');
    }
}
