import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariable {
  locale: number = Number(sessionStorage.getItem("locale"));
  constructor() {
    if(sessionStorage.getItem("locale")==null) {
      sessionStorage.setItem('locale', String(this.locale));
      this.locale = 0;
    }
    else
      this.locale = Number(sessionStorage.getItem("locale"));
  }

  changeLocale(locale:number){
    this.locale = locale
    sessionStorage.setItem('locale',String(locale));
  }
}
