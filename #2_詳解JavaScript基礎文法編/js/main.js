'use strict';

console.log('Hello World from main.js!');
// console.log('Hello');
// console.log('Hello');

// console.log("it's me!");
// console.log('it\'s me!');

// console.log('Hello\nWorld\t!');
// console.log('Hello'+'World!');

// \n　改行
// \t　タブ

// 文字列の表現
// \の使い方
// 文字列の連結

console.log(10 + 3); //13
console.log(10 - 3); //7
console.log(10 * 3); //30
console.log(10 % 3);
console.log(10 / 3); //3.3333...
console.log(10 ** 3); //1000
console.log(10 + 2 * 3); //16
console.log((10 + 2) * 3); //36
//演算子

//定数
// const price = 100;

// console.log(price * 120);
// console.log(price * 150);

//let 変数

let price = 100; //変数

console.log(price * 120);
console.log(price * 150);

price = 200;

console.log(price * 120);
console.log(price * 150);

// price = price + 100;
price += 100; //上記と同じ意味になる
price ++; //price += 1と同じ意味
console.log(price);

console.log(typeof 'Hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefind);
console.log(typeof null);

console.log('5' - 2);
console.log('5' + 2); //足し算だけ計算してくれない
console.log(parseInt('5') + 2); //parseIntを使用すると文字列を整数に変換してくれる
//整数に変換できない文字列は NaNとなる

console.log(price < 1000); //true
console.log(price > 1000); //false
console.log(price <= 1000); //true
console.log(price >= 1000); //false
console.log(price === 1000); //false
console.log(price !== 1000); //true

console.log(Boolean(0));
console.log(Boolean('Hello'));

const score = 85;
if (score >= 80){
  console.log('GREAT!');
} else if (score >= 60){
  console.log('GOOD');
} else {
  console.log('OK...');
} 
  
//条件演算子
score >= 80 ? console.log('GREAT!') : console.log('OK...');
//短く書けるが、可読性も考慮する

const testScore = 60;
const name = 'Funa';

if (testScore >= 50) {
  if (name === 'Funa'){
    console.log('Goood job!!');
  }
}

//論理演算子
// &&　なおかつ（and）
// ||　もしくは（or）
// ! 　～ではない（not）

if (testScore >= 50 && name === 'Funa'){
  console.log('Goood job!!!');
}

const signal = 'green';

//#16 switchで条件分岐をしてみよう

if (signal === 'red'){
console.log('Stop');
}
else if(signal === 'yellow'){
console.log('Caution');
}
else if(signal === 'green'){
console.log('Go');
}

switch (signal){
  case 'red':
    console.log('Stop');
    break;
  case 'yellow':
    console.log('Caution');
    break;
  case 'green':
  case 'blue':
    console.log('Go');
    break;
  default:
    console.log('WrongSignal');
}

//#17 forを使ったループ処理をしよう

for (let i=1; i<= 10; i++){
    // console.log('Hello')
    console.log(`Hello ${i}`)
}

// for テンプレートリテラル

//#18 whileを使ったループ処理をしよう

// let HP = 100;
// while (HP > 0){
//   console.log(`${HP}HP`);
//   HP -= 15;
// }

let HP = 100;
do {
  console.log(`${HP}HP`);
  HP -= 15;
} while (HP > 0);

for (let a = 1; a <= 10; a++){
  if (a === 4){
    continue;
  }
  console.log(a)
}

//#20 関数で処理をまとめてみよう  #21 引数を使ってみよう
function showAd(message = 'vanillaAd'){ //仮引数
  console.log('----------')
  console.log(`${message}`)
  console.log('----------')
}

showAd('headerAd'); //実引数
console.log('Tom is great')
console.log('Bob is great')
showAd();
console.log('Steave is great')
console.log('Bile is great')
showAd('footerAd');


//#22 returnで値を返してみよう
function sum(a, b, c){
  return a + b + c;
}

const total = sum(1, 2, 3) + sum(5, 5, 5);
console.log(total);
