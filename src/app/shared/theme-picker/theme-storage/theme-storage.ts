import {Injectable, EventEmitter} from '@angular/core';

export interface PortalSiteTheme {
  href: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}


@Injectable()
export class ThemeStorage {
  static storageKey = 'portal-theme-storage-current';

  onThemeUpdate: EventEmitter<PortalSiteTheme> = new EventEmitter<PortalSiteTheme>();

  storeTheme(theme: PortalSiteTheme) {
    try {
      window.localStorage[ThemeStorage.storageKey] = JSON.stringify(theme);
    } catch (e) { }

    this.onThemeUpdate.emit(theme);
  }

  getStoredTheme(): PortalSiteTheme {
    try {
      return JSON.parse(window.localStorage[ThemeStorage.storageKey] || null);
    } catch (e) {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorage.storageKey);
    } catch (e) { }
  }
}
