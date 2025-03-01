export class Drug {
  constructor(
    public expiresIn: number,
    public benefit: number,
    public name?: string
  ) {}

  protected hasNoMoreBenefit(): boolean {
    return this.benefit <= 0;
  }

  protected hasMaximumBenefit(): boolean {
    return this.benefit >= 50;
  }

  protected increaseBenefit(): Drug {
    if (this.hasMaximumBenefit()) {
      return this;
    }
    this.benefit += 1;
    return this;
  }

  protected decreaseBenefit(): Drug {
    if (this.hasNoMoreBenefit()) {
      return this;
    }
    this.benefit -= 1;
    return this;
  }

  protected expiresInLessThan(daysRemaining: number): boolean {
    return this.expiresIn < daysRemaining;
  }

  protected hasExpired(): boolean {
    return this.expiresIn <= 0;
  }

  decreaseDurability(): Drug {
    this.expiresIn -= 1;
    return this;
  }

  processBenefit(): void {
    if (this.hasExpired()) {
      this.decreaseBenefit();
    }
    this.decreaseBenefit();
  }
}

export class Pharmacy<T extends Drug> {
  constructor(private drugs: T[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): T[] {
    this.drugs.forEach((drug) => {
      drug.processBenefit();
      drug.decreaseDurability();
    });

    return this.drugs;
  }
}
