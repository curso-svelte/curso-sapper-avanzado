<script>
  import Store from '../store';
</script>

<style>
  .Detail {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .title {
    text-align: center;
    font-size: 2rem;
    color: var(--white);
    font-weight: bold;
  }
  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 80%;
  }
  .Popular {
    background: var(--primary);
    color: var(--white);
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    max-width: 190px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Adult {
    background: var(--black);
    color: var(--white);
    padding: 10px;
    border-radius: 5px;
    text-transform: uppercase;
  }
  .Ranking {
    background: var(--red);
    color: var(--white);
    padding: 10px;
    border-radius: 5px;
    text-transform: uppercase;
  }
</style>

<div class="Detail">
  <div class="title">{$Store.title}</div>
  <div class="details">
    <a href="./information" class="Popular">Saber más sobre {$Store.title}</a>
    <div class="Adult">
      {#if $Store.adult}
        18+
      {:else}
        7+
      {/if}
    </div>
    <div class="Ranking">{$Store.ranking}</div>
  </div>
</div>