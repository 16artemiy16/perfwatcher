<script>
    export let fn;
</script>

    <article class="fn">
        <h2 class="fn__spec">{fn.spec}</h2>
        <div class="fn__description">{fn.description}</div>
        <h4>Arguments</h4>
        {#each fn.args as arg}
            <div class="fn__arg">{arg.name} ({arg.type}) {arg.description}</div>
        {/each}
        <h4>Example</h4>
        <pre>
            {fn.example}
        </pre>
    </article>

<style>
    .fn {
        display: flex;
        flex-direction: column;
    }

    .fn__spec {
        background: #eee;
        color: #5f5f5f;
    }
</style>