<script>
	import Condition from './condition.svelte';
	import Shoot from './shoot.svelte';
</script>

<div style="display: flex; justify-content: space-between; align-content: flex-start;">
	<Condition target={'self'} />
	<Shoot />
	<Condition target={'opponent'} />
</div>
