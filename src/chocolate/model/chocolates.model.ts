import mongoose from 'mongoose';

export const ChocolateSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: { type: Boolean, default: false },
});

export interface Chocolate {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

// export const CHOCOLATES = [
//   {
//     id: '1',
//     title: 'CHOCOLATE #1',
//     description: 'This is the description for the CHOCOLATE #1',
//     completed: false,
//   },
//   {
//     id: '2',
//     title: 'CHOCOLATE #2',
//     description: 'This is the description for the CHOCOLATE #2',
//     completed: false,
//   },
//   {
//     id: '3',
//     title: 'CHOCOLATE #3',
//     description: 'This is the description for the CHOCOLATE #3',
//     completed: true,
//   },
//   {
//     id: '4',
//     title: 'CHOCOLATE #4',
//     description: 'This is the description for the CHOCOLATE #4',
//     completed: false,
//   },
//   {
//     id: '5',
//     title: 'CHOCOLATE #5',
//     description: 'This is the description for the CHOCOLATE #5',
//     completed: true,
//   },
//   {
//     id: '6',
//     title: 'CHOCOLATE #6',
//     description: 'This is the description for the CHOCOLATE #6',
//     completed: false,
//   },
//   {
//     id: '7',
//     title: 'CHOCOLATE #7',
//     description: 'This is the description for the CHOCOLATE #7',
//     completed: false,
//   },
// ];
