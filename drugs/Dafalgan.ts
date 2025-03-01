import { Drug } from "../pharmacy";

export class Dafalgan extends Drug {
  constructor(
    public expiresIn: number,
    public benefit: number
  ) {
    super(expiresIn, benefit, "Dafalgan");
  }

  processBenefit(): void {
    if (this.hasExpired()) {
      this.decreaseBenefit();
      this.decreaseBenefit();
    }
    this.decreaseBenefit();
    this.decreaseBenefit();
  }
}
