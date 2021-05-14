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

	if(action.type == 'successRegister'){
		alert('Usuário cadastrado com sucesso!');

		return state;
	}

	if(action.type == 'errorRegister'){
		alert('Erro: '+action.payload.code);

		return state;
	}

	return state;
};

export default AuthReducer;