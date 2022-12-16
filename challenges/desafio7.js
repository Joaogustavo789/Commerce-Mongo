db.produtos.find(
  { tags: {
    $exists: false,
  },
}, {
_id: 0, nome: 1, vendidos: 1,
},
);
