<script lang="ts">
	import { mirror } from '../scripts/store';

	$: stage = $mirror?.stage ? $mirror.stage : 0;
</script>

<div class="container" style="align-content: center">
	<h1>Round {stage}/3</h1>
</div>
