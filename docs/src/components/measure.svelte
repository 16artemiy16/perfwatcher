<script>
    import { fib } from "./fns";
    // TODO: move perfwatcher to package.json as local depencency
    import * as perfwatcher from '../../../lib/dist/esm';

    let n = 1;
    $: code = `
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

perfwatcher.measure(() => fib(${n}));
`
    $: test = n * 100

    let result = '_';

    const calc = () => {
        result = perfwatcher.measure(() => {
            fib(n)
        }).toFixed(2)
    }
</script>

<article class="function">
    <h2>measure(fn)</h2>
    <em>Measures the function execution time</em>

    <div class="example">
        <input type="number" min="1" bind:value={n}>
        <h2>n = {n}</h2>
        <pre>{code}</pre>
    </div>

    <button on:click={calc}>Measure</button>

    <div>Result: <b>{result} ms</b></div>
</article>

<style>
    .function {
        display: flex;
        flex-direction: column;
        width: 500px;
    }
    .example {
        display: flex;
        flex-direction: column;
    }

    .example input {
        width: 300px;
    }
</style>