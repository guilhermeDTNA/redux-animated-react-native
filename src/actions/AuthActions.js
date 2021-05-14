import firebase from '../Connection';

export const editEmail = (email) => {
	return {
		type: 'editEmail',
		payload: {
			email: email
		}
	};
};

export const editPass = (pass) => {
	return {
		type: 'editPass',
		payload: {
			pass: pass
		}
	}
}

export const handleLogin = (email, pass) => {

	//Usando ReduxThunk para requisição assíncrona
	return (dispatch) =>{
		firebase.auth().createUserWithEmailAndPassword(email, pass)
			.then((user) => {
				dispatch({
					type: 'successRegister'
				});
			})
			.catch((error) => {
				dispatch({
					type: 'errorRegister',
					payload:{
						code: error.code
					}
				});
			});
	}
};