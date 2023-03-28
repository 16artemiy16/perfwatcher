<script>
    import FnBlock from '../components/fnBlock.svelte';
    import {fnDocs} from "../constants";

    const fnList = fnDocs
</script>

<h1>perfwatcher</h1>
<em>The performance measure library.</em>

{#each fnList as fn}
<FnBlock
    fn="{fn}"
/>
{/each}