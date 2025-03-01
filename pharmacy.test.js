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
    const orginalOutputRaw = fs.readFileSync('original-output.json', 'utf-8');
    const currentOutputRaw = fs.readFileSync('output.json', 'utf-8');

    const orginalOutput = JSON.parse(orginalOutputRaw).result;
    const currentOutput = JSON.parse(currentOutputRaw).result;

    orginalOutput.forEach((originalRow, index) => {
      console.log(originalRow)
      expect(originalRow.name).toEqual(currentOutput[index].name);
      expect(originalRow.benefit).toEqual(currentOutput[index].benefit);
      expect(originalRow.expiresIn).toEqual(currentOutput[index].expiresIn);
    })
  });
});
