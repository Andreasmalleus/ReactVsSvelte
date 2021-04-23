<script>
    import { afterUpdate, onMount } from 'svelte';

    let show = false;

    afterUpdate(() => {
        console.timeEnd("test")
    })

    function handleClick(){
        show = true
        console.time("test")
    }
</script>

{#if show}
	<div>
        {#each [...Array(1000)] as _, i}
            <div>
                <p>{i}</p>
            </div>
        {/each}
    </div>
{:else}
    <div>
        <button on:click={handleClick}>Insert elements</button>
    </div>
{/if}