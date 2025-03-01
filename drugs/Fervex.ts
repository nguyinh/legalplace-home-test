import { Drug } from "../pharmacy";

export class Fervex extends Drug {
  constructor(
    public expiresIn: number,
    public benefit: number
  ) {
    super(expiresIn, benefit, "Fervex");
  }

  processBenefit(): void {
    if (this.hasExpired()) {
      this.benefit = this.benefit - this.benefit;
    } else {
      this.increaseBenefit();
      if (this.expiresInLessThan(11)) {
        this.increaseBenefit();
      }
      if (this.expiresInLessThan(6)) {
        this.increaseBenefit();
      }
    }
  }
}
