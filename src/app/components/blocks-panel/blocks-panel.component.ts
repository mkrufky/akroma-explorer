import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Block } from 'typesafe-web3/dist/lib/model/block';
import { BlockService } from '../../services/block.service';


@Component({
  selector: 'app-blocks-panel',
  templateUrl: './blocks-panel.component.html',
  styleUrls: ['./blocks-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlocksPanelComponent implements OnInit {
  blocks$!: Observable<Block[]>;

  constructor(
    private blockService: BlockService,
  ) { }

  ngOnInit() {
    this.blocks$ = from(this.blockService.getBlocks());
  }

  trackBlock(index: number, block: Block) {
    return block ? block.number : undefined;
  }
}
