<!-- EN EL SERVIDOR -->
<script context="module">
	export async function preload (page, session) {
		const {
			API_KEY_MOVIEDB,
			URL_MOVIEDB,
			LANGUAGE_MOVIEDB,
			URL_SMALL_IMAGE,
			URL_BIG_IMAGE
		} = session;

		const PATH = `${URL_MOVIEDB}movie/popular?api_key=${API_KEY_MOVIEDB}&language=${LANGUAGE_MOVIEDB}&page=1`;
		let movies = await this.fetch(PATH);
		movies = await movies.json();
		movies = movies.results;
		return {
			movies,
			API_KEY_MOVIEDB,
			URL_SMALL_IMAGE,
			URL_BIG_IMAGE
		}
	}
</script>

<!-- EN EL NAVEGADOR -->
<script>
	import Store from '../store';
	import Page from '../components/Page.svelte';
	import Thumbnail from '../components/Thumbnail.svelte';
	export let movies;
	// export let API_KEY_MOVIEDB;
	export let URL_SMALL_IMAGE;
	export let URL_BIG_IMAGE;
	if (Array.isArray(movies) && movies.length > 0) {
		Store.update(state => ({
			...state,
			id: movies[0].id,
			url: movies[0].poster_path,
			title: movies[0].title,
			adult: movies[0].adult,
			detail: movies[0].overview,
			ranking: movies[0].vote_average
		}));
	}
</script>

<style>
</style>

<svelte:head>
	<title>MovieSvelte</title>
</svelte:head>

<Page urlBig={URL_BIG_IMAGE}>
	<Thumbnail {movies} urlSmall={URL_SMALL_IMAGE}/>
</Page>
