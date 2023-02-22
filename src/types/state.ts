export type State = {
	todos: string[];
	todoInput: string;
	setTodos: (payload: string[]) => void;
	setTodoInput: (payload: string) => void;
	todoIndex: number;
	setTodoIndex: (payload: number) => void;
};
