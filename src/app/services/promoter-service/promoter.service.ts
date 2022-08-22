import { Injectable } from '@angular/core';
import { PROMOTERS } from "../../mock-entities/mock-promoters";
import { Promoter } from "../../interfaces/promoter";

@Injectable({
  providedIn: 'root'
})
export class PromoterService {

  getPromoters(): Promoter[] {
    return PROMOTERS;
  }

  constructor() { }
}
