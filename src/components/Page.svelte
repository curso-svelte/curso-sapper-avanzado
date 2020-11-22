<script>
  import Store from '../store';
  import Search from './Search.svelte';
  import Details from './Details.svelte';
  export let urlBig;
</script>

<style>
  .Page {
    height: var(--height);
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
  }
  .gradient {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background-image: linear-gradient(var(--yellow), transparent);
    pointer-events: none;
  }
</style>

<div class="Page" style="background: url({urlBig}{$Store.url})">
  <div class="gradient"/>
  <Search />
  <Details /> 
  <slot />
</div>