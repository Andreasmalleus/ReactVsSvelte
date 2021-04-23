<script>
    import { afterUpdate, beforeUpdate } from 'svelte';

    let title = "title"

    //component is updated in the dom
    afterUpdate(() => {
        console.timeEnd("test")
    });

    function handleClick(event) {
        title = Math.random().toString(36).substr(2, 5)
        console.time("test")
	}

</script>

<div>
    <button on:click={handleClick}>Update elements</button>
	{#each [...Array(1000)] as _, i}
        <div>
            <p>{title}</p>
        </div>
	{/each}
</div>