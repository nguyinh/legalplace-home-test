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
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.name != 'Herbal Tea' && drug.name != 'Fervex') {
          if (drug.name != 'Magic Pill') {
          drug.decreaseBenefit();
        }
      } else {
        drug.increaseBenefit();
          if (drug.name == 'Fervex') {
            if (drug.expiresIn < 11) {
            drug.increaseBenefit();
            }
            if (drug.expiresIn < 6) {
            drug.increaseBenefit();
          }
        }
      }
      if (drug.name != 'Magic Pill') {
        drug.expiresIn = drug.expiresIn - 1;
      }
      if (drug.expiresIn < 0) {
        if (drug.name != 'Herbal Tea') {
          if (drug.name != 'Fervex') {
              if (drug.name != 'Magic Pill') {
              drug.decreaseBenefit();
            }
          } else {
            drug.benefit = drug.benefit - drug.benefit;
          }
        } else {
          drug.increaseBenefit();
        }
      }
    });

    return this.drugs;
  }
}
