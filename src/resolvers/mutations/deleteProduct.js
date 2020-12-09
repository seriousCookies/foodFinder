const { ApolloError } = require("apollo-server-express");

module.exports = async (_, {id}, {models}) => {
  
  const deleteProduct = await models.Product.deleteOne({_id: id})

  if(deleteProduct.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete address.`);

};