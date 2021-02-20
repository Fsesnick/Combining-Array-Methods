/*
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const users = userNames
  .filter(nome => nome.charAt(0) === 'S')
  .map(nome => ({nome}));

console.log(users);
*/

const users = [
{nome: 'Samir', idade: 27},
{nome: 'Angela', idade: 33},
{nome: 'Beatriz', idade: 42},
{nome: 'Shaniqua', idade: 30},
{nome: 'Marvin', idade: 23},
{nome: 'Sean', idade: 47}
];

const userNames = users
  .filter(user => user.idade >= 30)
  .map(user => user.nome);

console.log(userNames);
