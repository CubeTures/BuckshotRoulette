<script lang="ts">
	import background from '$lib/assets/backgrounds/TempScreenClean.png';
</script>

<div class="background" style="background-image: url({background})"></div>
<div class="curtain"></div>

<style lang="sass">
	.background
		position: absolute
		z-index: -10
		top: 0
		bottom: 0
		left: 0
		right: 0
		width: 100dvw
		height: 100dvh
		background-size: cover
		background-position: center
		background-repeat: no-repeat
</style>
