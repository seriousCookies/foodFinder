export const veganList = ["egg", "skalldyr", "blotdyr", "melk", "fisk"];
export const GFList = ["gluten"];

export const useFilter = (list, data) => {
  return data.filter((item) =>
    item.allergen
      .map((el) => !(list.includes(el.name) && el.code !== "FRI"))
      .reduce((a, b) => a && b)
  );
};
