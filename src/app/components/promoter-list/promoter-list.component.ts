import { Component, OnInit } from '@angular/core';
import { PromoterService } from "../../services/promoter-service/promoter.service";
import { Promoter } from "../../interfaces/promoter";

@Component({
  selector: 'app-promoter-list',
  templateUrl: './promoter-list.component.html',
  styleUrls: ['./promoter-list.component.scss']
})
export class PromoterListComponent implements OnInit {

  promoters: Promoter[] = [];

  constructor(
    private promoterService: PromoterService,
  ) { }

  ngOnInit(): void {
    this.getPromoters()
  }

  getPromoters(): void{
    this.promoters = this.promoterService.getPromoters();
  }
}
