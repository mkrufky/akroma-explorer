import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule, PaginationModule } from 'ngx-bootstrap';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { TypeSafeWeb3 } from 'typesafe-web3';
import { AppComponent } from './app.component';
import { AddressQrcodeComponent } from './components/address-qrcode/address-qrcode.component';
import { BlocksPanelComponent } from './components/blocks-panel/blocks-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionsPanelComponent } from './components/transactions-panel/transactions-panel.component';
import { AddressDetailsComponent } from './pages/address-details/address-details.component';
import { BlockDetailsComponent } from './pages/block-details/block-details.component';
import { ExplorerHomeComponent } from './pages/explorer-home/explorer-home.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';
import { HexToAsciiPipe } from './pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from './pipes/unix-timestamp-to-date.pipe';
import { RoutingModule } from './routing.module';
import { AddressService } from './services/address.service';
import { BlockService } from './services/block.service';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    // pages
    ExplorerHomeComponent,
    AddressDetailsComponent,
    BlockDetailsComponent,
    TransactionDetailsComponent,
    // components
    BlocksPanelComponent,
    AddressQrcodeComponent,
    TransactionsPanelComponent,
    HeaderComponent,
    AddressQrcodeComponent,
    // pipes
    UnixTimestampToDatePipe,
    HexToAsciiPipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    HttpClientModule,
  ],
  providers: [
    BlockService,
    TransactionService,
    AddressService,
    {
      provide: TypeSafeWeb3,
      useFactory: getTypeSafeWeb3
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function getTypeSafeWeb3(): TypeSafeWeb3 {
  return new TypeSafeWeb3('http://localhost:8545');
}
