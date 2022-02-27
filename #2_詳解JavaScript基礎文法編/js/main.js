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


const signal = 'red';

if (signal === 'red'){
console.log('Stop');
}
else if(signal === 'yellow'){
console.log('Caution');
}
else if(signal === 'Green'){
console.log('Go');
}