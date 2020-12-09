module.exports = async (_, {}, {models}) => {
  return await models.Product.find();
};


