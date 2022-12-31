db.produtos.countDocuments({
  "ingredientes.4": { $exists: false },
});