import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';

import {editEmail, editPass} from '../actions/AuthActions';

export class Register extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>E-mail:</Text>
				<TextInput value={this.props.email} style={styles.input} onChangeText={(txt) => this.props.editEmail(txt)} />

				<Text>Senha:</Text>
				<TextInput value={this.props.pass} secureTextEntry={true} style={styles.input} onChangeText={(txt) => this.props.editPass(txt)} />

				<Button title="Entrar" onPress={this.handleLogin} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		margin: 10
	},
	input:{
		height: 40,
		backgroundColor: '#CCCCCC',
		padding: 5,
		marginBottom: 10
	}
});

const mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		pass: state.auth.pass
	};
};

const RegisterConnect = connect(mapStateToProps, {editEmail, editPass})(Register);

export default RegisterConnect;