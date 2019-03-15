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

  //2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
    let filter2= cars.filter(str=>{
      return Array.from(str)
        .filter(araba => araba === "o").length === 2;
      });
      console.log(`Icinde iki defa "o" harfi gecen arabalar "${filter2}" ve sayisi: ${filter2.length}`);
//3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.
let filter3= cars.filter(str=>{
  return str.length<5;
});
console.log(`Araba isim uzunlugu 5'den kücük olan arabalar: ${filter3}`);
//4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.
let filter4=Array();
let filter44= cars.filter(str=>{
return str[0]==='f';
  });
  for(let i=0;i<filter44.length;i++){
  filter4.push(filter44[i].replace(/.$/,"x"))
  }
console.log(`Ilk harfi "f" olan arabalar ${filter44} 'in

son harfleri x olarak degistirildi: ${filter4}`);
//5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari,
//isimlerinin önüne "my favorite " gelecek sekilde degistirin ve listeleyin.
let filter5= cars.filter(str=>{
  return str.length>3 && str.length<6 && str.includes("a");
});
filter5.map((line)=>`My favorite ${line}`)
console.log(`${filter5.map((line)=>` My favorite ${line}`)}`);
/*6) find() methodu ile filter() method arasindaki farklari yazin.

=>filter runs till the end of the array, and invokes its callback on every item;
 in contrast to find which stops after having found one.
 When the callback throws an exception on one of these additionally iterated elements, the outcome is different.
=>filter returns an array , while find return an object
=> When to use filter?
.filter() when you want to select a subset of multiple elements from an array.

  When to use find?
.find() When you want to select a single element from an array.

*/
