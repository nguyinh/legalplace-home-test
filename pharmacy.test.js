import { Drug, Pharmacy } from "./pharmacy";
import fs from 'fs';

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
});

describe("Magic Pill", () => {
  const magicPill = new Drug("Magic Pill", 2, 3);
  magicPill.processBenefit();
  magicPill.decreaseDurability();

  it("name should be 'Magic Pill'", () => {
    expect(magicPill.name).toEqual(
      'Magic Pill'
    );
  });
  it("should not change its expiration", () => {
    expect(magicPill.expiresIn).toEqual(
      2
    );
  });
  it("should not change its benefit", () => {
    expect(magicPill.expiresIn).toEqual(
      2
    );
  });
});

describe("Doliprane", () => {
  it("should decrease benefit when expiration is not reached", () => {
    const doliprane = new Drug("Doliprane", 2, 3);
    doliprane.processBenefit();
    doliprane.decreaseDurability();

    expect(doliprane.name).toEqual(
      'Doliprane'
    );
    expect(doliprane.expiresIn).toEqual(
      1
    );
    expect(doliprane.benefit).toEqual(
      2
    );
  });
  it("should decrease benefit twice when expiration is reached", () => {
    const doliprane = new Drug("Doliprane", -1, 3);
    doliprane.processBenefit();
    doliprane.decreaseDurability();

    expect(doliprane.name).toEqual(
      'Doliprane'
    );
    expect(doliprane.expiresIn).toEqual(
      -2
    );
    expect(doliprane.benefit).toEqual(
      1
    );
  });
});

describe("Herbal Tea", () => {
  it("should increase benefit when expiration is not reached", () => {
    const herbalTea = new Drug("Herbal Tea", 2, 3);
    herbalTea.processBenefit();
    herbalTea.decreaseDurability();

    expect(herbalTea.name).toEqual(
      'Herbal Tea'
    );
    expect(herbalTea.expiresIn).toEqual(
      1
    );
    expect(herbalTea.benefit).toEqual(
      4
    );
  });
  it("should decrease benefit twice when expiration is reached", () => {
    const herbalTea = new Drug("Herbal Tea", -1, 3);
    herbalTea.processBenefit();
    herbalTea.decreaseDurability();

    expect(herbalTea.name).toEqual(
      'Herbal Tea'
    );
    expect(herbalTea.expiresIn).toEqual(
      -2
    );
    expect(herbalTea.benefit).toEqual(
      5
    );
  });
});


describe("Dafalgan", () => {
  it("should decrease benefit twice when expiration is not reached", () => {
    const dafalgan = new Drug("Dafalgan", 2, 3);
    dafalgan.processBenefit();
    dafalgan.decreaseDurability();

    expect(dafalgan.name).toEqual(
      'Dafalgan'
    );
    expect(dafalgan.expiresIn).toEqual(
      1
    );
    expect(dafalgan.benefit).toEqual(
      1
    );
  });
  it("should decrease benefit 4 times twice when expiration is reached", () => {
    const dafalgan = new Drug("Dafalgan", -1, 7);
    dafalgan.processBenefit();
    dafalgan.decreaseDurability();

    expect(dafalgan.name).toEqual(
      'Dafalgan'
    );
    expect(dafalgan.expiresIn).toEqual(
      -2
    );
    expect(dafalgan.benefit).toEqual(
      3
    );
  });
});


describe("Fervex", () => {
  it("should increase in benefit once when expiration is above 10 days", () => {
    const fervex = new Drug("Fervex", 12, 3);
    fervex.processBenefit();
    fervex.decreaseDurability();

    expect(fervex.name).toEqual(
      'Fervex'
    );
    expect(fervex.expiresIn).toEqual(
      11
    );
    expect(fervex.benefit).toEqual(
      4
    );
  });
  it("should increase in benefit twice when expiration is below 10 days", () => {
    const fervex = new Drug("Fervex", 9, 3);
    fervex.processBenefit();
    fervex.decreaseDurability();

    expect(fervex.name).toEqual(
      'Fervex'
    );
    expect(fervex.expiresIn).toEqual(
      8
    );
    expect(fervex.benefit).toEqual(
      5
    );
  });
  it("should increase in benefit 3 times when expiration is below 5 days", () => {
    const fervex = new Drug("Fervex", 2, 3);
    fervex.processBenefit();
    fervex.decreaseDurability();

    expect(fervex.name).toEqual(
      'Fervex'
    );
    expect(fervex.expiresIn).toEqual(
      1
    );
    expect(fervex.benefit).toEqual(
      6
    );
  });
  it("should lose all benefit if expiration has passed", () => {
    const fervex = new Drug("Fervex", -1, 9);
    fervex.processBenefit();
    fervex.decreaseDurability();

    expect(fervex.name).toEqual(
      'Fervex'
    );
    expect(fervex.expiresIn).toEqual(
      -2
    );
    expect(fervex.benefit).toEqual(
      0
    );
  });
});


describe("Random drug", () => {
  it("should decrease benefit when expiration is not reached", () => {
    const ultraGeneric3000 = new Drug("UltraGeneric3000", 2, 3);
    ultraGeneric3000.processBenefit();
    ultraGeneric3000.decreaseDurability();

    expect(ultraGeneric3000.name).toEqual(
      'UltraGeneric3000'
    );
    expect(ultraGeneric3000.expiresIn).toEqual(
      1
    );
    expect(ultraGeneric3000.benefit).toEqual(
      2
    );
  });
  it("should decrease benefit twice when expiration is reached", () => {
    const ultraGeneric3000 = new Drug("UltraGeneric3000", -1, 3);
    ultraGeneric3000.processBenefit();
    ultraGeneric3000.decreaseDurability();

    expect(ultraGeneric3000.name).toEqual(
      'UltraGeneric3000'
    );
    expect(ultraGeneric3000.expiresIn).toEqual(
      -2
    );
    expect(ultraGeneric3000.benefit).toEqual(
      1
    );
  });
});