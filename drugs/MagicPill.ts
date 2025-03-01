import { Drug } from "../pharmacy";

export class MagicPill extends Drug {
  constructor(
    public expiresIn: number,
    public benefit: number
  ) {
    super(expiresIn, benefit, "Magic Pill");
  }

  processBenefit(): void {
    return;
  }
  decreaseDurability() {
    return this;
  }
}
