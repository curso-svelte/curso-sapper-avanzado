<script>
  import Store from '../store';
  export let movie;
  export let urlSmall;

  function setMovie () {
    Store.update(state => ({
      ...state,
      id: movie.id,
			adult: movie.adult,
			url: movie.poster_path,
			title: movie.title,
			ranking: movie.vote_average,
			detail: movie.overview
    }))
  }
</script>

<style>
  figure {
    padding: 0;
    margin: 0;
  }
  img {
    height: 200px;
    width: 150px;
    object-fit: cover;
    padding: 0;
    margin: 0;
    border-radius: 7px;
    margin-right: 5px;
    margin-left: 5px;
    cursor: pointer;
  }
  figcaption {
    text-align: center;
    height: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: rgba(0, 0, 0, .35);
    color: var(--white);
  }
</style>

<div class="Movie">
  <figure>
    <img src={urlSmall}{movie.poster_path} alt={movie.title} on:click={setMovie}>
    {#if $Store.id === movie.id}
      <figcaption>{movie.title}</figcaption>
    {/if}
  </figure>
</div>