import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export class Home extends Component{

	static navigationOption = {
		title: null,
		header: null
	}

	constructor(props){
		super(props);
		
		this.handleRegister = this.handleRegister.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleAnimations = this.handleAnimations.bind(this);
	}

	handleRegister(){
		this.props.navigation.navigate('Register');
	}

	handleLogin(){
		this.props.navigation.navigate('Login');
	}

	handleAnimations(){
		this.props.navigation.navigate('Animations');
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

					<TouchableHighlight underlayColor="#CCCCCC" style={styles.button} onPress={this.handleAnimations}>
						<Text style={styles.btnText}>Animações</Text>
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
		backgroundColor: 'transparent',
		paddingBottom: 40
	},
	button:{
		width: 200,
		height: 50,
		
		alignItems: 'center',
		justifyContent: 'center',

		backgroundColor: '#16E07F',
		margin: 10
	},
	btnText:{
		fontSize: 20,
		color: 'white'
	}
});

export default Home;