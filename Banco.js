// criação do banco e utilização
use zoo_db;
//cria uma coleção chamada animais
db.createCollection("animais");

// 2
db.animais.insertMany([
    { nome: "Bilu", especie: "Arara", idade: 5, dieta: "Onívoro", habitat: "Mata Atlântica", vacinado: false, cuidador: "Miguel" },
    { nome: "Teteia", especie: "Elefante", idade: 3, dieta: "Herbívoro", habitat: "Floresta Tropical", vacinado: false, cuidador: "Ana" },
    { nome: "Pedro", especie: "Tigre branco", idade: 7, dieta: "Carnívoro", habitat: "Floresta Tropical", vacinado: false, cuidador: "Michele" },
    { nome: "Sampaio", especie: "Urso", idade: 12, dieta: "Onívoro", habitat: "Floresta", vacinado: false, cuidador: "Alexandre" },
    { nome: "Almondega", especie: "Suricato", idade: 4, dieta: "Onívoro", habitat: "Deserto", vacinado: false, cuidador: "Gustavo" }
]);

// 3
// Listar todos os animais herbívoros
db.animais.find({ dieta: "Herbívoro" });

// Encontrar os animais que vivem em desertos
db.animais.find({ habitat: "Deserto" });

// 4
// Vacinar todos os felinos
db.animais.updateMany(
    { especie: { $in: ["Leão", "Tigre-de-bengala"] } },
    { $set: { vacinado: true } }
);

// 5
// Remover animais com idade maior que 15 anos
db.animais.deleteMany({ idade: { $gt: 15 } });