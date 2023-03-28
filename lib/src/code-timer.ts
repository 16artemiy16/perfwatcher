import {TAnyFunction} from './models';

export const measure = (fn: TAnyFunction) => {
  const start = performance.now();
  fn();
  const finish = performance.now();

  return finish - start;
};
