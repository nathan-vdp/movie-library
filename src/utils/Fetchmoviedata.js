const url = 'https://imdb231.p.rapidapi.com/api/imdb/title-countries-of-origin/v1?id=tt12037194&languageCountry=en_US';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6ce06550a8msh276449fb659ed8cp1d2982jsn8d6b1a77b4bf',
		'x-rapidapi-host': 'imdb231.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export { };
