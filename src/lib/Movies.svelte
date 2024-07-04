<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{ posters: any; }}
	 */
	let movies;

	onMount(async () => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGVhODhkYTRmYWQ3MWU5MzEwMjkyY2UzY2I0Y2ViYyIsIm5iZiI6MTcyMDA4NDgyMS41NTI5OSwic3ViIjoiNjY4NjY4NDlmOGU3YWFkZGZkMjU5ODI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IVoTCP6mPxtBXeCqIk7WS2VUFInW1U8U2ARU_xQMyyM'
			}
		};

		try {
			const response = await fetch('https://api.themoviedb.org/3/movie/16/images', options);
			const data = await response.json();
			movies = data;
		} catch (err) {
			console.error(err);
		}
	});
</script>

<main>
	{#if movies}
		<div class="grid grid-cols-2 gap-1">
			<div class="">
				{#each movies.posters as poster}
					<img
						src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
						alt="Poster image"
						aria-hidden="true"
					/>
				{/each}
			</div>
		</div>
	{/if}
</main>
