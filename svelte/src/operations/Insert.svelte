<script>
    import { onMount } from 'svelte';

    console.time("test")

    onMount(() => {
        console.timeEnd("test")
    });

</script>

<div>
	{#each [...Array(1000)] as _, i}
        <div>
            <p>{i}</p>
        </div>
	{/each}
</div>