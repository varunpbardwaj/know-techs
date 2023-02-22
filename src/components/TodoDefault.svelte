<script lang="ts">
	import store from '../zustand/store';

	$: todos = [...$store.todos];
</script>

{#if todos.length === 0}
	<div class="p-8 text-lg text-sky-50 font-semibold cursor-pointer">
		<span>Click on "+" to add todo!</span>
	</div>
{/if}
