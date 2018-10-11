import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBookmarksComponent } from './settings-bookmarks.component';

describe('SettingsBookmarksComponent', () => {
  let component: SettingsBookmarksComponent;
  let fixture: ComponentFixture<SettingsBookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsBookmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
