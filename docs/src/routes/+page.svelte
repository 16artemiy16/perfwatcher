<script>
	import Header from '../components/layout/header.svelte';
	import DocNavigation from '../components/layout/docNavigation.svelte';
	import FnBlock from '../components/fnBlock.svelte';
	import { fnDocs } from '../constants';

	const fnList = fnDocs;
</script>

<div class="page">
	<Header />
	<div class="middle">
		<DocNavigation />
		<main class="content">
			{#each fnList as fn}
				<FnBlock {fn} />
			{/each}
		</main>
		<footer></footer>
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.middle {
		flex: 1;
		display: flex;
		overflow: hidden;
	}
	.content {
		flex: 1;
		overflow: auto;
	}
</style>