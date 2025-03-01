import { Drug } from "../pharmacy";

export class Doliprane extends Drug {
  constructor(
    public expiresIn: number,
    public benefit: number
  ) {
    super(expiresIn, benefit, "Doliprane");
  }

  processBenefit(): void {
    if (this.hasExpired()) {
      this.decreaseBenefit();
    }
    this.decreaseBenefit();
  }
}
