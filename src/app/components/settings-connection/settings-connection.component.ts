import { Component, OnInit } from '@angular/core';
import { MasternodeStatusModel } from '../../models/masternode.status.model';
import { MasternodeService } from '../../services/masternode.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings-connection',
  templateUrl: './settings-connection.component.html',
  styleUrls: ['./settings-connection.component.scss']
})
export class SettingsConnectionComponent implements OnInit {
  nodes: MasternodeStatusModel[];
  constructor(
    private settings: SettingsService,
    private masternodeService: MasternodeService) {
    this.nodes = [];
  }

  ngOnInit() {
    this.masternodeService
      .getStatusList()
      .subscribe(x => {
        if (x.ok) {
          this.nodes = x.data;
        }
      });
  }

  get connectedTo(): string {
    return this.settings.getConnectionUrl();
  }


  setConnection(url: string) {
    this.settings.setConnectionUrl(url);
  }

  setRemoteConnection(nodeId: string) {
    this.setConnection(`https://${nodeId}.remote.akroma.io`);
  }


}
