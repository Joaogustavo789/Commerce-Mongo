db.produtos.find({
  $and: [
    { valoresNutricionais: {
      $elemMatch: {
        tipo: "proteínas",
        percentual: {
          $gte: 30,
        },
      },
    } },
    { valoresNutricionais: {
      $elemMatch: {
        tipo: "proteínas",
        percentual: {
          $lte: 40,
        },
      },
    } },
  ],
}, {
  _id: 0, nome: 1,
});
