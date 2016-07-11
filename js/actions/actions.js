var todoId = 0

export const ADD_TODO = 'ADD_TODO'

export function addTodo(todo) => {
	return {
		type: 'ADD_TODO', 
		id: todoId++, 
		todo
	}
}