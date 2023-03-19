type TMeasureOpts = {
    name?: string;
}

export const measure = (fn: Function, opts: TMeasureOpts = {}) => {
    const start = performance.now();
    fn();
    const finish = performance.now();

    console.log(opts?.name, finish - start);
}