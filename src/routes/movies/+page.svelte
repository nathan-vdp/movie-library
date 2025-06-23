<script>
    export let data;
    const { popular } = data;
</script>

<h1>Populaire films</h1>
<ul>
    {#each popular as movie}
        <li>{movie.title}</li>
    {/each}
</ul>