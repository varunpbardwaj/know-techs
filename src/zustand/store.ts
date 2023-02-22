import { readable } from 'svelte/store';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { State } from '../types/state';

const blacklist = [''];

const useStore = create<State>()(
	devtools(
		persist(
			immer((set: (arg0: (state: State) => void, arg1: boolean, arg2: string) => void) => ({
				todos: [] as string[],
				setTodos: (payload: string[]) =>
					set(
						(state: State) => {
							state.todos = payload;
						},
						false,
						'SET_TODOS'
					),
				todoInput: '',
				setTodoInput: (payload: string) =>
					set(
						(state: State) => {
							state.todoInput = payload;
						},
						false,
						'SET_TODO_INPUT'
					),
				todoIndex: -1,
				setTodoIndex: (payload: number) =>
					set(
						(state: State) => {
							state.todoIndex = payload;
						},
						false,
						'SET_TODO_INDEX'
					)
			})),
			{
				name: 'zustand:app',
				partialize: (state: State) =>
					Object.fromEntries(Object.entries(state).filter(([key]) => !blacklist.includes(key)))
			}
		)
	)
);

function svelteStore(zStore: typeof useStore) {
	return readable(zStore.getState(), (set) => {
		const unsubscribe = zStore.subscribe((value) => set(value));
		return () => unsubscribe();
	});
}

export default svelteStore(useStore);
