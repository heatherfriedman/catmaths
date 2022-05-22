export const WEIGHT_LOSS_RATIO = 0.9;

export const CALS_PER_SERVING = {
  wetCan: 80,
  dryScoop: 84,
} as const;

export const CALS_PER_DAY_BY_LBS: Record<number, number> = {
  1: 39,
  2: 65,
  3: 88,
  4: 110,
  5: 130,
  6: 149,
  7: 167,
  8: 184,
  9: 200,
  10: 218,
  11: 234,
  12: 250,
  13: 265,
  14: 280,
  15: 295,
  16: 310,
  17: 324,
  18: 339,
  19: 353,
  20: 366,
};

export const getCalsPerDay = (lbs: number) => {
  const floor = Math.floor(lbs);
  const ceil = Math.ceil(lbs);

  const floorCalsPerDay = CALS_PER_DAY_BY_LBS[floor];
  const ceilCalsPerDay = CALS_PER_DAY_BY_LBS[ceil];

  const halfDelta = (ceilCalsPerDay - floorCalsPerDay) / 2;

  return floorCalsPerDay + halfDelta;
};
