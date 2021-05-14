import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export class Home extends Component{

	static navigationOption = {
		title: null,
		header: null
	}

	constructor(props){
		super(props);
		this.state = {};

		this.handleRegister = this.handleRegister.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleRegister(){
		this.props.navigation.navigate('Register');
	}

	handleLogin(){
		this.props.navigation.navigate('Login');
	}

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Home do Sistema</Text>

				<View style={styles.buttonArea}>
					<TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.handleRegister}>
						<Text style={styles.btnText}>Cadastrar</Text>
					</TouchableHighlight>

					<TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.handleLogin}>
						<Text style={styles.btnText}>Login</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title:{
		fontSize: 30,
		backgroundColor: 'transparent'
	}
});

export default Home;