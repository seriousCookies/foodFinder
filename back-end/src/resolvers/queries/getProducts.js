const getProduct = async (parent, args, context, info) => {
  const res = await db
    .collection("Parsed-Meny")
    .find({ ean: args.search })
    .toArray()
    .then((res) => {
      return res;
    });
  const result = {
    title: res[0].title,
    subtitle: res[0].subtitle,
    shoppingListGroupName: res[0].shoppingListGroupName,
    shoppingListGroupName1: res[0].shoppingListGroupName1,
    weight: res[0].weight,
    nutritionalContent: res[0].nutritionalContent,
    allergen: res[0].allergens,
    ingredients: res[0].ingredients,
    ean: res[0].ean,
    allergyDeclaration: res[0].allergyDeclaration,
  };
  return result;
};
module.exports = getProduct;
