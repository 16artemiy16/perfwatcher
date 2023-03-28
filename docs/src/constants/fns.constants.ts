export const fnDocs = [
  {
    spec: "measure(fn)",
    description: 'Measures the function execution time.',
    args: [
      {
        name: 'fn',
        type: 'Function',
        description: 'The function to check time'
      }
    ],
    example: `
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
perfwatcher.measure(() => fib(8));
`
  }
];
