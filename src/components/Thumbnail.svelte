<script>
  import Movie from '../components/Movie.svelte';
  export let movies;
  export let urlSmall;
</script>

<style>
  .Thumbnail {
    height: 300px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    z-index: 2;
  }
  .movies {
    height: 250px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    overflow: auto;
  }
  .ticket {
    background: var(--red);
    color: var(--white);
    padding: 10px;
    margin: auto;
    margin-bottom: 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    width: 120px;
    text-decoration: none;
  }
</style>

<div class="Thumbnail">
  <a href="./ticket" class="ticket">Comprar ticket</a>
  <div class="movies">
    {#each movies as movie (movie.id)}
      <Movie {movie} {urlSmall}/>
    {/each}
  </div>
</div>