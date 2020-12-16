
const resolvers = {
  Query: {
    getProduct: async (parent, args, context, info) => {
      const res = await db.collection("Parsed-Meny")
      .find({ean:args.search})
      .toArray()
      .then(res => { return res });
      const result = {
        title: res[0].title,
        weight: res[0].weight,
        subtitle: res[0].subtitle,
        nutritionalContent: res[0].nutritionalContent,
        allergen: res[0].allergens,
        ingredients: res[0].ingredients,
        ean: res[0].ean,
      }
      return result;
    }
  }
}
module.exports = resolvers;