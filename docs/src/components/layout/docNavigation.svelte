<script lang="ts">
    import { fnDocs } from '../../constants';
</script>

<aside>
    {#each fnDocs as fn}
        <div class="item">
            <a href="#{fn.name}">{fn.name}</a>
        </div>
    {/each}
</aside>

<style>
    a {
        text-decoration: none;
        color: grey;
    }
    aside {
        width: 310px;
        border-right: 1px gray solid;
        padding: 1rem;
    }
</style>