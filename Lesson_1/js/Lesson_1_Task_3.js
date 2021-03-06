"use strict";
/*
1. Т.к у первого оператора сложения и слева и справа в качестве операндов стоят числа, то вначале идет аримфетическая
операция: 10 + 10 = 20. У следующего оператора сложения левый операнд число, а правый строка, поэтому в этом случае
происходит неявное приведение результата сложения 10 + 10 к типу "строка", а затем уже конкатенация строк: "2010".
2. Во втором примере строка "10" является операндом для двух операторов сложения, поэтому происходит неявное приведение
чисел к типу "строка" и их конкатенация: "101010"
3. Здесь с помощью оператора унарного плюса происходит явное приведение строки к типу "число": 30.
4. В этом случае результат операции деления будет -Infinity (отрицательная бесконечность). Т.к. приведение пустой строки
с помощью оператора унарного минуса дает -0
5. Попытка поделить число на строку даст результат NаN (не число). Т.к. строку "2,5" невозможно с помощью унарного
плюса привести к типу "число", из-за того что синтаксис JS не позволяет отделять дробную часть вещественного
числа запятой.
*/

console.log(10 + 10 + "10");
console.log(10 + "10" + 10);
console.log(10 + 10 + +"10");
console.log(10 / -"");
console.log(10 / +"2,5");

