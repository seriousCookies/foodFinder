const { ApolloError } = require("apollo-server-express");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const productToUpdate = await models.Product.findOne({_id: id});

    if(!productToUpdate) throw new ApolloError(`Could not find product with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      productToUpdate[value] = input[value];
    });

    const updatedProduct = await productToUpdate.save();

    return updatedProduct
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  