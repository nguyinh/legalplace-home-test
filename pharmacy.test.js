import { Drug, Pharmacy } from "./pharmacy";
import fs from 'fs';

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
});

describe("Output file", () => {
  it("content should not be modified", () => {
    const log = [];

      const drugs = [
        new Drug("Doliprane", 20, 30),
        new Drug("Herbal Tea", 10, 5),
        new Drug("Fervex", 12, 35),
        new Drug("Magic Pill", 15, 40),
      ];
      const pharmacy = new Pharmacy(drugs);

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
    }

    /* eslint-disable no-console */
    fs.writeFileSync(
      "test-output.json",
      JSON.stringify({ result: log }, null, 2).concat("\n"),
      (err) => {
        if (err) {
          // console.log("error");
        } else {
          // console.log("success");
        }
      },
    );
    /* eslint-disable no-console */


    const orginalOutputRaw = fs.readFileSync('original-output.json', 'utf-8');
    const currentOutputRaw = fs.readFileSync('test-output.json', 'utf-8');

    const originalOutput = JSON.parse(orginalOutputRaw).result;
    const currentOutput = JSON.parse(currentOutputRaw).result;

    originalOutput.forEach((drugs, index) => {
      drugs.forEach((drug) => {
        const matchingOriginalDrug = currentOutput[index].find((originalDrug) => originalDrug.name === drug.name);
        expect(drug.name).toEqual(matchingOriginalDrug.name);
        expect(drug.benefit).toEqual(matchingOriginalDrug.benefit);
        expect(drug.expiresIn).toEqual(matchingOriginalDrug.expiresIn);
      })
    })
  });
});
