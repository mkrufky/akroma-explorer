import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/bookmark.model';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-settings-bookmarks',
  templateUrl: './settings-bookmarks.component.html',
  styleUrls: ['./settings-bookmarks.component.scss']
})
export class SettingsBookmarksComponent implements OnInit {
  bookmarks!: Bookmark[];

  constructor(private bookmarkService: BookmarkService) { }

  async ngOnInit(): Promise<void> {
    this.bookmarks = await this.bookmarkService.getAll();
  }

}
