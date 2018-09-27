import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Block } from 'typesafe-web3/dist/lib/model/block';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
import { BlockService } from '../../services/block.service';


@Component({
  selector: 'app-transactions-panel',
  templateUrl: './transactions-panel.component.html',
  styleUrls: ['./transactions-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsPanelComponent implements OnInit {
  transactions$!: Observable<Transaction[]>;
  blocks$!: Observable<Block[]>;

  constructor(
    private blockService: BlockService,
  ) { }

  ngOnInit() {
    this.blocks$ = from(this.blockService.getBlocks());
  }

  trackTransaction(index: number, transaction: Transaction) {
    return transaction ? transaction.hash : undefined;
  }
}
