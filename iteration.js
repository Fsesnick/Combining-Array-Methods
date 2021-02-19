const users = [
  {nome: 'Samir', idade:27},
  {nome: 'Angela', idade:33},
  {nome: 'Beatrice', idade:42}
];
  
//const newUsersArray = users.filter(user => user.name !== 'Samir');

// 'Samir tem 27 anos '
const newUsersArray = users.map(user => `${user.nome} tem ${user.idade} anos`);

console.log(newUsersArray);
