import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Utils from 'typesafe-web3/dist/lib/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lookupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit() {
    this.lookupForm = this.formBuilder.group({
      lookup: this.formBuilder.control(''),
    });
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
