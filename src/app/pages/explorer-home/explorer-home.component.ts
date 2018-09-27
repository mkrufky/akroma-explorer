import { Component, OnInit } from '@angular/core';

type Panel = 'blocks' | 'transactions';

@Component({
  selector: 'app-explorer-home',
  templateUrl: './explorer-home.component.html',
  styleUrls: ['./explorer-home.component.scss'],
})
export class ExplorerHomeComponent implements OnInit {
  private activePanel: Panel = 'blocks';

  constructor(
  ) { }

  ngOnInit() {
  }

  get isBlocksPanelActive() {
    return this.activePanel === 'blocks';
  }

  get isTransactionsPanelActive() {
    return this.activePanel === 'transactions';
  }

  setActivePanel(panel: Panel) {
    if (this.activePanel === panel) { return; }

    this.activePanel = panel;
  }
}
