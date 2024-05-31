
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  private style!: HTMLLinkElement;
  private cssFile!: string;
  private themeCSSID: string = 'themeCSS';
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  setTheme(theme: Theme, renderer2: Renderer2) {
    this.cssFile = `${theme}.css`;
    this.removeExistingThemeStyle(renderer2, this.themeCSSID);
    this.style = renderer2.createElement('link') as HTMLLinkElement;
    renderer2.setProperty(this.style, 'rel', 'stylesheet');
    renderer2.setProperty(this.style, 'href', `../assets/themeCSS/${this.cssFile}`);
    renderer2.setProperty(this.style,"type","text/css")
    renderer2.setProperty(this.style, 'id', this.themeCSSID);
    renderer2.appendChild(this.document.head, this.style);
  }

  removeExistingThemeStyle(renderer2: Renderer2, themeCSSID: string) {
    const themeIDHTMlElem = this.document.getElementById(themeCSSID);
    if (themeIDHTMlElem) {
      renderer2.removeChild(this.document.head, themeIDHTMlElem);
    }
  }
}

