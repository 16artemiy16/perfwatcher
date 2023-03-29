import type {IFnDescription} from '../models/fn.interface';
import {ArgType} from '../models/fn.interface';

export const fnDocs: IFnDescription[] = [
  {
    name: 'measure',
    spec: 'measure(fn)',
    description: 'Measures the function execution time.',
    args: [
      {
        name: 'fn',
        type: ArgType.Function,
        description: 'The function to check time'
      }
    ],
    example: `
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
perfwatcher.measure(() => fib(8));
`
  },
  {
    name: 'test2',
    spec: 'test2(fn)',
    description: 'This is mock, do not care.',
    args: [],
    example: `
test2()
`
  },
  {
    name: 'test3',
    spec: 'test3(fn)',
    description: 'This is mock, do not care.',
    args: [],
    example: `
test3()
`
  },
  {
    name: 'test4',
    spec: 'test4(fn)',
    description: 'This is mock, do not care.',
    args: [],
    example: `
test4()
`
  }
];
