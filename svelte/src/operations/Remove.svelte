<script>
import { afterUpdate } from "svelte";

    let show = true;

    function handleClick(event) {
        show = false;
        console.time("test")
    }
    
    afterUpdate(() => {
        console.timeEnd("test")
    })

</script>

    {#if show}
	<div>
        <button on:click={handleClick}>Remove elements</button>
        {#each [...Array(1000)] as _, i}
            <div>
                <p>{i}</p>
            </div>
        {/each}
    </div>
    {:else}
        <div></div>
    {/if}
