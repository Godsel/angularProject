import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  language: string;
  languageIso: string;
  languageFlag: string;

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.language = this.translateService.currentLang;
    this.languageIso = this.language.toUpperCase();
    this.languageFlag = this.language;
    if (this.language === 'en') {
      this.languageFlag = 'gb';
    }
  }

  changeLanguage(language: string) {
    if (language !== this.language) {
      this.translateService.use(language);
      this.ngOnInit();
    }
  }
}
