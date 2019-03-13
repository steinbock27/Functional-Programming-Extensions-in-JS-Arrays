//Submitted by: Ismet Ferdi SEN
let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo"];

//1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.

//ES6 Solution
//icinde "o" harfi gecen arabalar
let filter1= cars.filter(str=>{
  return str.includes("o");
});
console.log(`icinde "o" harfi gecen arabalar: ${filter1}
ve bu arabarin sayisi: ${filter1.length}`);

//
