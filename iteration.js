const users = [
  {nome: 'Samir', idade:27},
  {nome: 'Angela', idade:33},
  {nome: 'Beatrice', idade:42}
];
  
/*
  Samir: 27,
  Angela: 33,
  Beatrice: 42

  */
const usersObject = users.reduce((usersObject,user) => {

  usersObject[user.nome] = user.idade; 
  return usersObject;
},{});

console.log(usersObject);
