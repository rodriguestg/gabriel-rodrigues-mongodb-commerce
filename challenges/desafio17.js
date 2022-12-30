db.resumoProdutos.insertMany([{
  franquia: "McDonalds",
  totalProdutos: 5,
}]);

db.resumoProdutos.find({}, { _id: 0 });