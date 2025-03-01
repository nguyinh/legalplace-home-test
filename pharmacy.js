export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  hasNoMoreBenefit() {
    return this.benefit <= 0;
  }

  hasMaximumBenefit() {
    return this.benefit >= 50;
  }

  increaseBenefit() {
    if (this.hasMaximumBenefit()) {
      return;
    }
    this.benefit += 1;
  }

  decreaseBenefit() {
    if (this.hasNoMoreBenefit()) {
      return;
    }
    this.benefit -= 1;
  }

  expiresInLessThan(daysRemaining) {
    return this.expiresIn < daysRemaining;
  }

  hasExpired() {
    return this.expiresIn <= 0;
  }

  decreaseDurability() {
    if (this.name == 'Magic Pill') {
      return;
    }
    this.expiresIn -= 1;
  }

  processBenefit() {
    switch (this.name) {
      case 'Herbal Tea':
        if (this.hasExpired()) {
          this.increaseBenefit();
        }
        this.increaseBenefit();
        break;
      case 'Doliprane':
        if (this.hasExpired()) {
          this.decreaseBenefit();
        }
        this.decreaseBenefit();
        break;
      case 'Fervex':
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
      case 'Magic Pill':
        return;
      case 'Dafalgan':
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
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      drug.processBenefit();
      drug.decreaseDurability();
    });

    return this.drugs;
  }
}
