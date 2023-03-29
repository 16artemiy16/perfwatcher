<script lang="ts">
	import type { IFnDescription } from '../models/fn.interface';

	export let fn: IFnDescription;
</script>

<article class="fn">
	<h2 class="fn__spec" id={fn.name}>{fn.spec}</h2>
	<div class="fn__container">
		<div class="fn__description">{fn.description}</div>
		<h4>Arguments</h4>
		{#each fn.args as arg}
			<div class="fn__arg">{arg.name} ({arg.type}) {arg.description}</div>
		{/each}
		<h4>Example</h4>
		<pre>
            {fn.example}
		</pre>
	</div>

</article>

<style>
	.fn {
		display: flex;
		flex-direction: column;
	}

	.fn__container {
		padding: 1rem;
	}

	.fn__spec {
		background: #eee;
		color: #5f5f5f;
		padding: 1rem;
	}
</style>
