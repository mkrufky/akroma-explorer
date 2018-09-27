import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import Utils from 'typesafe-web3/dist/lib/utils';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lookupForm!: FormGroup;
  modalRef!: BsModalRef;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private settings: SettingsService,
    private modalService: BsModalService
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'akromaModal' });
  }

  ngOnInit() {
    this.lookupForm = this.formBuilder.group({
      lookup: this.formBuilder.control(''),
    });
  }

  get connectedTo(): string {
    return this.settings.getConnectionUrl();
  }

  setConnection(url: string) {
    this.settings.setConnectionUrl(url);
    this.modalRef.hide();
  }

  onSubmit() {
    const lookupValue = this.lookupForm.value.lookup;
    const lookupType = this.getLookupType(this.lookupForm.value.lookup);

    if (!lookupType) { return; }

    this.router.navigate(['/', lookupType, lookupValue]);
  }

  private getLookupType(lookupValue: string): string | null {
    if (this.isAddress(lookupValue)) { return 'address'; }
    if (this.isTransaction(lookupValue)) { return 'transaction'; }
    if (this.isBlock(lookupValue)) { return 'block'; }

    return null;
  }

  private isAddress(lookupValue: string): boolean {
    return Utils.isAddress(lookupValue);
  }

  private isTransaction(lookupValue: string): boolean {
    return /^0x?([A-Fa-f0-9]{64})$/.test(lookupValue);
  }

  private isBlock(lookupValue: string): boolean {
    return Number.parseInt(lookupValue, 10).toString(10) === lookupValue;
  }
}
