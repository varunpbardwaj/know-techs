<script lang="ts">
	import Icons from './Icons.svelte';
	import store from '../zustand/store';

	$: todos = $store.todos;
	$: todoIndex = $store.todoIndex;
	$: todoInput = $store.todoInput;
	const setTodos = $store.setTodos;
	const setTodoIndex = $store.setTodoIndex;
	const setTodoInput = $store.setTodoInput;

	const onClick = (i: number) => {
		setTodoIndex(i);
	};

	const onBlur = (i: number) => {
		const getTodos = [...todos];
		todoInput.trim() !== '' && (getTodos[i] = todoInput);
		setTodos(getTodos);
		setTodoInput('');
		setTodoIndex(-1);
	};

	const onChange = (
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) => {
		setTodoInput(e.currentTarget.value);
	};

	const onRemove = (i: number) => {
		const getTodos = [...todos];
		getTodos.splice(i, 1);
		setTodos(getTodos);
	};

	export let removeIcon: string;
</script>

{#if todos.length !== 0}
	<ul class="flex flex-col text-sky-50 p-4">
		{#each todos as todo, i}
			<li class="flex justify-between items-center p-4">
				{#if todoIndex !== i}
					<span class="text-lg font-bold cursor-pointer" on:click={() => onClick(i)}>
						{todo}
					</span>
				{/if}
				{#if todoIndex === i}
					<input
						class="text-lg font-bold bg-black outline-none border-none"
						autofocus
						on:blur={() => onBlur(i)}
						on:change={onChange}
					/>
				{/if}
				<div class="text-2xl text-red-400 cursor-pointer" on:click={() => onRemove(i)}>
					<Icons icon={removeIcon} />
				</div>
			</li>
		{/each}
	</ul>
{/if}
