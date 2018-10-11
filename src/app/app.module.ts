import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, ModalModule, PaginationModule, TabsModule } from 'ngx-bootstrap';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AppComponent } from './app.component';
import { AddressQrcodeComponent } from './components/address-qrcode/address-qrcode.component';
import { BlocksPanelComponent } from './components/blocks-panel/blocks-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionsPanelComponent } from './components/transactions-panel/transactions-panel.component';
import { AddressDetailsComponent } from './pages/address-details/address-details.component';
import { BlockDetailsComponent } from './pages/block-details/block-details.component';
import { ExplorerHomeComponent } from './pages/explorer-home/explorer-home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';
import { HexToAsciiPipe } from './pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from './pipes/unix-timestamp-to-date.pipe';
import { RoutingModule } from './routing.module';
import { AddressService } from './services/address.service';
import { AkromaService } from './services/akroma.service';
import { BlockService } from './services/block.service';
import { MasternodeService } from './services/masternode.service';
import { SettingsService } from './services/settings.service';
import { TransactionService } from './services/transaction.service';
import { SettingsConnectionComponent } from './components/settings-connection/settings-connection.component';
import { SettingsBookmarksComponent } from './components/settings-bookmarks/settings-bookmarks.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';

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
    SettingsComponent,
    SettingsConnectionComponent,
    SettingsBookmarksComponent,
    BookmarkComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxQRCodeModule,
    HttpClientModule,
  ],
  providers: [
    BlockService,
    TransactionService,
    AddressService,
    SettingsService,
    AkromaService,
    MasternodeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
