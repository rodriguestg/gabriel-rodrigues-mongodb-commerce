db.produtos.find({
  valoresNutricionais: { $elemMatch: {
    tipo: { $eq: "calorias" },
    quantidade: { $lt: 500 },
  },
},
}, { nome: 1, _id: 0 });