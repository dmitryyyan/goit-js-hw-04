function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  let sum = 0;
  const values = Object.values(days);

  for (let k in values) {
    sum += values[k].calories;
  }

  return sum / values.length;
}

console.log(
  calcAverageCalories([
    { day: "понеділок", calories: 3010 },
    { day: "вівторок", calories: 3200 },
    { day: "середа", calories: 3120 },
    { day: "четвер", calories: 2900 },
    { day: "п'ятниця", calories: 3450 },
    { day: "субота", calories: 3280 },
    { day: "неділя", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "понеділок", calories: 2040 },
    { day: "вівторок", calories: 2270 },
    { day: "середа", calories: 2420 },
    { day: "четвер", calories: 1900 },
    { day: "п'ятниця", calories: 2370 },
    { day: "субота", calories: 2280 },
    { day: "неділя", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0
