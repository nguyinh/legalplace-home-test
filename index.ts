import { Dafalgan } from "./drugs/Dafalgan";
import { Doliprane } from "./drugs/Doliprane";
import { Fervex } from "./drugs/Fervex";
import { HerbalTea } from "./drugs/HerbalTea";
import { MagicPill } from "./drugs/MagicPill";
import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";

const drugs = [
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(12, 35),
  new MagicPill(15, 40),
  new Dafalgan(20, 45),
  new Drug(10, 15, "UltraGeneric3000"),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  }
);

/* eslint-enable no-console */
