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