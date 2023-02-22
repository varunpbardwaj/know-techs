<script lang="ts">
	import TodoDefault from '../components/TodoDefault.svelte';
	import TodoList from '../components/TodoList.svelte';
	import Icons from '../components/Icons.svelte';
	import store from '../zustand/store';

	$: todos = $store.todos;
	const setTodos = $store.setTodos;

	const onAdd = () => {
		setTodos([...todos, 'new todo']);
	};
</script>

<div class="flex flex-col items-center py-10 select-none">
	<div class="mb-10 text-center text-2xl font-bold">Todo App</div>
	<div class="w-1/2 bg-black rounded">
		<TodoDefault />
		<TodoList removeIcon="mdi:trash" />
	</div>
	<button
		class="w-1/2 flex justify-center text-center bg-black text-green-300 text-sm m-5 p-2 rounded-full"
		on:click={onAdd}
	>
		<div class="text-3xl">
			<Icons icon="material-symbols:add-circle-outline-rounded" />
		</div>
	</button>
</div>
