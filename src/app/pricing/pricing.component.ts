import { Component, OnInit } from "@angular/core";
import { Options, LabelType, ChangeContext } from "ng5-slider";

@Component({
  selector: "tix-pricing",
  templateUrl: "./pricing.component.html"
})
export class PricingComponent implements OnInit {
  passengerCount: any = 0;
  totalTierPrice: any = 0;
  totalEmailPrice: any = 0;
  totalPnPrice: any = 0;
  totalPrice: any = 0;
  paxMin: any = 1e6;
  mailMin: any = 1e6;
  pnMin: any = 1e6;
  tier: any = [
    5e6,
    10e6,
    15e6,
    20e6,
    25e6,
    30e6,
    35e6,
    40e6,
    45e6,
    50e6,
    100e6
  ];
  paxOption: Options = this.sliderOption(110e6);
  mailOption: Options = this.sliderOption(10e6);
  pnOption: Options = this.sliderOption(10e6);
  isFirstOpen = true;

  constructor() {}
  // Slider option
  sliderOption(ceilVal) {
    return {
      floor: 0,
      step: 1000,
      ceil: ceilVal,
      showSelectionBar: true,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return this.roundValue(value, 0);
          case LabelType.High:
            return this.roundValue(value, 0);
          default:
            return this.roundValue(value, 0);
        }
      }
    };
  }
  // On user change get value
  onUserChange(changeContext: ChangeContext): void {
    this.passengerCount = this.roundValue(changeContext.value, 2);
    this.totalTierPrice = this.calculate(changeContext.value);
    this.allPrice();
  }

  // On user change get value
  onMailChange(changeContext: ChangeContext): void {
    this.passengerCount = this.roundValue(changeContext.value, 2);
    const emailCount = changeContext.value;
    let emailPrice;
    if (emailCount < 100e6) {
      emailPrice = emailCount * 0.0008;
    } else {
      emailPrice = emailCount * 0.0007;
    }
    this.totalEmailPrice = emailPrice;
    this.allPrice();
  }

  // On user change get value
  onPnChange(changeContext: ChangeContext): void {
    this.passengerCount = this.roundValue(changeContext.value, 2);
    this.totalPnPrice = changeContext.value * 0.003;
    this.allPrice();
  }

  allPrice() {
    this.totalPrice = (this.totalTierPrice / 12) + this.totalEmailPrice + this.totalPnPrice;
  }

  // Round value
  roundValue(input, decimals) {
    let exp;
    const suffixes = ["k", "M", "G", "T", "P", "E"];
    if (input < 1000) {
      return input;
    }
    exp = Math.floor(Math.log(input) / Math.log(1000));
    return (input / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
  }

  // Calculate pax count
  calculate(paxCount) {
    let tierPrice;
    if (paxCount < this.tier[0]) {
      tierPrice = paxCount * 0.03;
    } else if (paxCount < this.tier[1]) {
      tierPrice = this.calculateTier(paxCount, this.tier[0], 0.028, 0.025);
    } else if (paxCount < this.tier[2]) {
      tierPrice = this.calculateTier(paxCount, this.tier[1], 0.027, 0.024);
    } else if (paxCount < this.tier[3]) {
      tierPrice = this.calculateTier(paxCount, this.tier[2], 0.026, 0.023);
    } else if (paxCount < this.tier[4]) {
      tierPrice = this.calculateTier(paxCount, this.tier[3], 0.025, 0.022);
    } else if (paxCount < this.tier[5]) {
      tierPrice = this.calculateTier(paxCount, this.tier[4], 0.024, 0.021);
    } else if (paxCount < this.tier[6]) {
      tierPrice = this.calculateTier(paxCount, this.tier[5], 0.023, 0.02);
    } else if (paxCount < this.tier[7]) {
      tierPrice = this.calculateTier(paxCount, this.tier[6], 0.022, 0.019);
    } else if (paxCount < this.tier[8]) {
      tierPrice = this.calculateTier(paxCount, this.tier[7], 0.021, 0.018);
    } else if (paxCount < this.tier[9]) {
      tierPrice = this.calculateTier(paxCount, this.tier[8], 0.02, 0.017);
    } else if (paxCount < this.tier[10]) {
      tierPrice = this.calculateTier(paxCount, this.tier[9], 0.019, 0.016);
    } else if (paxCount > this.tier[10]) {
      tierPrice = this.calculateTier(paxCount, this.tier[10], 0.016, 0.015);
    }
    return tierPrice;
  }

  // Calculate tier
  calculateTier(paxCount, paxSplit, tier1, tier2) {
    return paxSplit * tier1 + (paxCount - paxSplit) * tier2;
  }

  ngOnInit() {
    // Initial price
    this.totalTierPrice = this.paxMin * 0.03;
    this.totalEmailPrice = this.mailMin * 0.0008;
    this.totalPnPrice = this.pnMin * 0.003;
    this.passengerCount = this.roundValue(this.paxMin, 0);
    this.totalPrice = (this.totalTierPrice / 12 + this.totalEmailPrice);
  }
}
