interface Orders {
  orderNumber: string;
  title: string | string[];
  price: string | string[];
  dateOrdered: string;
}
const orderHistory: Orders[] = [
  {
    orderNumber: '114-3941689-8722320',
    title: 'JavaScript for impatient programmers',
    price: '31.55',
    dateOrdered: 'August 4, 2020',
  },
  {
    orderNumber: '113-9984268-1280257',
    title: 'The Timeless Way of Building',
    price: '41.33',
    dateOrdered: 'July 19, 2020',
  },
  {
    orderNumber: '114-2875557-9059409',
    title:
      'Gamecube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    price: '15.98',
    dateOrdered: 'July 4, 2020',
  },
  {
    orderNumber: '113-2883177-2648248',
    title: [
      'GameCube Controller - Super Smash Bros. Edition(Nintendo Switch)',
      'The Art of Sql',
    ],
    price: ['94.95', '33.99'],
    dateOrdered: 'July 3, 2020',
  },
];
