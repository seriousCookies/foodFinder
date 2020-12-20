const getSimilarItems = async (parent, args, context, info) => {
  const res = await db
    .collection("Parsed-Meny")
    .find({ shoppingListGroupName1: args.search })
    .toArray()
    .then((res) => {
      return res;
    });
  let result = [];
  res.forEach((element) =>
    result.push({
      title: element.title,
      subtitle: element.subtitle,
      shoppingListGroupName: element.shoppingListGroupName,
      shoppingListGroupName1: element.shoppingListGroupName1,
      weight: element.weight,
      nutritionalContent: element.nutritionalContent,
      allergen: element.allergens,
      ingredients: element.ingredients,
      ean: element.ean,
      allergyDeclaration: element.allergyDeclaration,
    })
  );
  return result;
};
module.exports = getSimilarItems;
