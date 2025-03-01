import { Drug } from "../pharmacy";

export class HerbalTea extends Drug {
  constructor(
    public expiresIn: number,
    public benefit: number
  ) {
    super(expiresIn, benefit, "Herbal Tea");
  }

  processBenefit(): void {
    if (this.hasExpired()) {
      this.increaseBenefit();
    }
    this.increaseBenefit();
  }
}
