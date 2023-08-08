import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariable {
  locale: number= Number(sessionStorage.getItem("locale")) | 0;

}
