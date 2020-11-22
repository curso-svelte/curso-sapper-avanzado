<script>
	import Main from '../components/Main.svelte';
	import Message from '../Services/Message.svelte';
</script>

<style>
</style>

<Message />
<Main>
	<slot></slot>
</Main>