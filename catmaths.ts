import { CALS_PER_SERVING, getCalsPerDay, WEIGHT_LOSS_RATIO } from "./utils.ts";

type IsGoodCat = "yes" | "no" | "most of the time";

type Cat = {
  name: string;
  lbs: number;
  wetCansPerDay: number;
  needsWeightLoss?: boolean;
  isGoodCat: IsGoodCat;
};

type CatFeedingInstructions = {
  cat: Cat;
  dryScoopsPerDay: number;
  wetCansPerDay: number;
  totalCals: number;
  isGoodCat: IsGoodCat;
};

const getInstructions = (...cats: Cat[]): CatFeedingInstructions[] =>
  cats.map((cat) => {
    const { wetCansPerDay, lbs, needsWeightLoss, isGoodCat } = cat;
    const calsPerDay = getCalsPerDay(lbs);
    const totalCals = calsPerDay * (needsWeightLoss ? WEIGHT_LOSS_RATIO : 1);
    const dryCalsNeeded = totalCals - wetCansPerDay * CALS_PER_SERVING.wetCan;
    const dryScoopsPerDay =
      Math.round((dryCalsNeeded / CALS_PER_SERVING.dryScoop) * 100) / 100;
    return {
      cat,
      dryScoopsPerDay,
      wetCansPerDay,
      totalCals,
      isGoodCat,
    };
  });

const results = getInstructions(
  {
    name: "Tycho",
    lbs: 15.6,
    wetCansPerDay: 1,
    isGoodCat: "most of the time",
    needsWeightLoss: true,
  },
  {
    name: "Luna",
    lbs: 12.8,
    wetCansPerDay: 1,
    isGoodCat: "yes",
    needsWeightLoss: false,
  },
  {
    name: "Sawyer",
    lbs: 14,
    wetCansPerDay: 0,
    isGoodCat: "most of the time",
    needsWeightLoss: true,
  },
);

console.log(results);
