import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
import { AddressService } from '../../services/address.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressDetailsComponent implements OnInit {
  currentPage = 1;
  transactions!: string[];
  total = 0;
  pages = 1;
  balance$!: Observable<string>;
  addressTransactions$!: Observable<Transaction[]>;
  address = '';
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private addressService: AddressService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.address = params.addressHash;
      this.transactionService.getTransactionCountByAddress(params.addressHash)
        .then(result => {
          this.total = result;
          this.pages = result / 10;
        });
      this.balance$ = from(this.addressService.getBalance(this.address));
      this.pageAddressTransactions({ init: true, page: 1 });
    });
  }

  pageAddressTransactions(event: any) {
    // guard to prevent excess firing
    if (this.currentPage === event.page && !event.init) {
      return;
    }
    this.addressTransactions$ = from(this.transactionService.getTransactionsAndBlockByAddress(this.address, event.page - 1));
    this.currentPage = event.page;
  }

  public isFrom(address: string): boolean {
    return this.address.toUpperCase() === address.toUpperCase();
  }
}
