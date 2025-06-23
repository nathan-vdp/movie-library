export async function load({ fetch }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API}&language=en-US&page=1`
    );
    const data = await res.json();
    console.log(data);
    
    if (res.ok) {
        return {
            popular: data.results
        };
    }

    throw new Error('Failed to fetch movies');
}