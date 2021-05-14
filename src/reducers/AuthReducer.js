const initialState = {
	email: 'gleite98@gmail.com',
	pass: '123456'
};

const AuthReducer = (state = [], action) => {

	if (state.length == 0) {
		return initialState;
	}

	if(action.type == 'editEmail'){
		return {...state, email:action.payload.email};
	}

	if(action.type == 'editPass'){
		return{...state, pass: action.payload.pass};
	}

	return state;
};

export default AuthReducer;