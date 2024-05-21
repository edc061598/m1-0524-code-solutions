'use strict';
const orderHistory = [
  {
    orderNumber: '114-3941689-8722320',
    title: 'JavaScript for impatient programmers',
    price: '31.55',
  },
  {
    orderNumber: '113-9984268-1280257',
    title: 'The Timeless Way of Building',
    price: '41.33',
  },
  {
    orderNumber: '114-2875557-9059409',
    title:
      'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    price: '15.98',
  },
  {
    orderNumber: '113-2883177-2648248',
    title: [
      'GameCube Controller - Super Smash Bros. Edition(Nintendo Switch)',
      'The Art of Sql',
    ],
    price: ['94.95', '33.99'],
  },
];
const secondTitle = orderHistory[1].title;
console.log(secondTitle);
const fourthTitle = orderHistory[3].title;
console.log(fourthTitle);
const thirdPrice = orderHistory[2].price;
console.log(thirdPrice);
