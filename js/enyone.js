

// const temps = [18, 14, 12, 21, 17, 29, 24];

// // const lowest = Math.min(...temps);
// // const hight = Math.max();

// const a = [{ x: 1 },
// { y: 2 },
// { z: 3 }
// ];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

const lastWeekTemps = [1, 2, 3];
  const currentTemps = [4, 5, 6];
  const nextWeekTemps = [7, 8, 9];
  
 const allTemps = lastWeekTemps.concat( currentTemps, nextWeekTemps) ;
  console.log(allTemps);

const allTemps2 = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
  console.log(allTemps2);