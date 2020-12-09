const { ApolloError } = require("apollo-server-express");

module.exports = async (_, {input}, {models}) => {

  try{
    newProduct = await models.Product.create(input);
    return newProduct
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
