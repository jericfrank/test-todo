export default function( state = [], action ) {
	switch ( action.type ) {
    case 'ADD_TODO':
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
				...state,
      ];

		case 'EDIT_TODO':
			const { id, text, completed } = action;
			return state.map(todo => (todo.id === action.id) ? {
				id, text, completed
			} : todo );

		default:
			return state;
	}
}
