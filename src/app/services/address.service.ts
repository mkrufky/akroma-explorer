import { Injectable } from '@angular/core';
import { TypeSafeWeb3 } from 'typesafe-web3';
import Utils from 'typesafe-web3/dist/lib/utils';
@Injectable()
export class AddressService {
    constructor(public typeSafeWeb3: TypeSafeWeb3) {
    }

    public async getBalacne(hash: string): Promise<string> {
        console.log('called: getTransaction');
        const result = await this.typeSafeWeb3.getBalance(hash);
        if (result.ok) {
            return Utils.fromWei(result.data!, 'ether').toString();
        }
        return Promise.reject('could not get block');
    }
}
