import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CryptoMarketsService } from 'src/app/services/crypto-markets.service';
import { CryptoMarketModel } from '../models/crypto-market';

@Component({
  selector: 'aw-crypto-markets',
  templateUrl: './crypto-markets.component.html',
  styleUrls: ['./crypto-markets.component.scss']
})
export class CryptoMarketsComponent implements OnInit {

  markets: CryptoMarketModel[] = [];
  @Input() quantity: number = 5;
  @Input() currency: string = 'usd';

  constructor(private cryptoMarketsService: CryptoMarketsService) { }

  ngOnInit(): void {
    this.fetchMarkets();
    interval(15000).subscribe(() => this.fetchMarkets());    
  }
  private fetchMarkets(){
    this.cryptoMarketsService.getMarkets(this.quantity, this.currency).subscribe(
      (markets: CryptoMarketModel[]) => this.markets = markets
    );
  }
}
