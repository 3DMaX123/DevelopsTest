export const findCar = <T>(
  array: T[],
  searchIn: keyof T,
  compare: string,
  fallback: string,
  getValue: keyof T
) => {
  const foundCar = array.find((v: T) => v[searchIn] == compare);
  return foundCar ? foundCar[getValue] : fallback;
};
