import { Injectable } from '@angular/core';
import { TypeSafeWeb3 } from 'typesafe-web3';
import { Block } from 'typesafe-web3/dist/lib/model/block';
@Injectable()
export class BlockService {
    constructor(public typeSafeWeb3: TypeSafeWeb3) {
    }

    public async getBlocks(): Promise<Block[]> {
        console.log('called: getBlocks');
        const blocks: Block[] = [];
        const latest = await this.typeSafeWeb3.getBlockByNumber('latest', true);
        if (latest.data !== undefined && latest.data.number !== undefined) {
            blocks.push(latest.data);
            const stop = latest.data.number - 10;
            for (let index = latest.data.number; index > stop; index--) {
                const next = await this.typeSafeWeb3.getBlockByNumber(index, true);
                if (next.data !== undefined) {
                    blocks.push(next.data);
                }
            }
        }
        return blocks;
    }

    public async getBlock(numberOrHash: string): Promise<Block> {
        console.log('called: getBlock');
        const result = (this.isHash(numberOrHash) === true)
            ? await this.typeSafeWeb3.getBlockByHash(numberOrHash)
            : await this.typeSafeWeb3.getBlockByNumber(parseInt(numberOrHash, 10));
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }

    private isHash(lookupValue: string): boolean {
        return /^0x?([A-Fa-f0-9]{64})$/.test(lookupValue);
    }
}
