<!-- EN EL SERVIDOR -->
<script context="module">
	export async function preload (page, session) {
		const { user } = session;
		if (!user) {
			this.redirect(303, 'login');
		}
	}
</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>