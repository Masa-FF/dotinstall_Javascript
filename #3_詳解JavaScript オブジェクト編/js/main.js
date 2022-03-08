'use strict';

{
const scores = [10, 100, 100];
// console.log(scores[1]);
scores[2] = 500;
console.log(scores[2])
console.log(scores.length)
}

//定数で指定した値でも、入れるの数値へ代入することは可能

// #03 配列とループ処理を組み合わせよう

// {
//   const scores = [80, 90 ,100];
//   console.log(`Score: ${scores[0]}`)
//   console.log(`Score: ${scores[1]}`)
//   console.log(`Score: ${scores[2]}`)
// }

const myScores = [80, 90, 100];
// for (let i = 0; i < 3; i++){
for (let i = 0; i < myScores.length; i++){
  console.log(`Score${i}: ${myScores[i]}`);
}