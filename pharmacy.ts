export class Drug {
  constructor(
    private name: string,
    private expiresIn: number,
    private benefit: number
  ) {}

  private hasNoMoreBenefit(): boolean {
    return this.benefit <= 0;
  }

  private hasMaximumBenefit(): boolean {
    return this.benefit >= 50;
  }

  private increaseBenefit(): Drug {
    if (this.hasMaximumBenefit()) {
      return this;
    }
    this.benefit += 1;
    return this;
  }

  private decreaseBenefit(): Drug {
    if (this.hasNoMoreBenefit()) {
      return this;
    }
    this.benefit -= 1;
    return this;
  }

  private expiresInLessThan(daysRemaining: number): boolean {
    return this.expiresIn < daysRemaining;
  }

  private hasExpired(): boolean {
    return this.expiresIn <= 0;
  }

  decreaseDurability(): Drug {
    if (this.name == "Magic Pill") {
      return this;
    }
    this.expiresIn -= 1;
    return this;
  }

  processBenefit() {
    switch (this.name) {
      case "Herbal Tea":
        if (this.hasExpired()) {
          this.increaseBenefit();
        }
        this.increaseBenefit();
        break;
      case "Doliprane":
        if (this.hasExpired()) {
          this.decreaseBenefit();
        }
        this.decreaseBenefit();
        break;
      case "Fervex":
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
        break;
      case "Magic Pill":
        return;
      case "Dafalgan":
        if (this.hasExpired()) {
          this.decreaseBenefit();
          this.decreaseBenefit();
        }
        this.decreaseBenefit();
        this.decreaseBenefit();
        break;
      default:
        if (this.hasExpired()) {
          this.decreaseBenefit();
        }
        this.decreaseBenefit();
        break;
    }
  }
}

export class Pharmacy {
  constructor(private drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    this.drugs.forEach((drug) => {
      drug.processBenefit();
      drug.decreaseDurability();
    });

    return this.drugs;
  }
}
