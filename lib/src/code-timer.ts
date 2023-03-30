import {TAnyFunction} from './models';

/** Measures the given function execution time. **/
export const measure = (fn: TAnyFunction) => {
  const start = performance.now();
  fn();
  const finish = performance.now();

  return finish - start;
};