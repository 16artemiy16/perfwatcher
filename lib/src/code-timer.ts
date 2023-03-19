type TMeasureOpts = {
    name?: string;
}

export const measure = (fn: Function, opts: TMeasureOpts = {}) => {
    const start = performance.now();
    fn();
    const finish = performance.now();

    return finish - start;
}