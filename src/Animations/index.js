import React, {Component} from 'react';
import {Text, View, Animated, Button, StyleSheet, Modal} from 'react-native';

export default class Animations extends Component{

	constructor(props){
		super(props);
		this.state = {
			widthRet: new Animated.Value(250),
			heightRet: new Animated.Value(50),
			opacityRet: new Animated.Value(0),
			opacityLoopRet: new Animated.Value(1),

			modalVisible: false
		};

		//Faz em sequência
		Animated.sequence([
			Animated.timing(
				this.state.opacityRet,
				{
					toValue: 1,
					duration: 2000
				}
				),

			//Faz ao mesmo tempo na altura e largura
			Animated.parallel([
				Animated.timing(
					this.state.heightRet,
					{
						toValue: 100,
						duration: 500,
					}
					),

				Animated.timing(
					this.state.widthRet,
					{
						toValue: 300,
						duration: 500	
					}
					)
				])

			]).start();

		this.blink = this.blink.bind(this);
		this.openModal = this.openModal.bind(this);
		this.setModalVisible = this.setModalVisible.bind(this);
	}

	blink(){
		Animated.loop(
			//Adicionamos um sequence para ele aumentar e diminuir o valor, ficando elegante
			Animated.sequence([
				Animated.timing(
					this.state.opacityLoopRet,
					{
						toValue: 0,
						duration: 1000
					}
					),

				Animated.timing(
					this.state.opacityLoopRet,
					{
						toValue: 1,
						duration: 1000
					}
					)
				])
			).start();
	}

	setModalVisible(status){
		this.setState({modalVisible: status});
	}

	openModal(){
		this.setModalVisible(true);
	}

	render(){

		return(

			<View style={[styles.container, {backgroundColor: '#999999'}]}>

			<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
			<Animated.View style={{opacity:this.state.opacityRet, width: this.state.widthRet, height: this.state.heightRet, backgroundColor: '#AAAFFF', justifyContent: 'center'}}>
			<Text style={{color: '#FFFFFF', fontSize: 25, textAlign: 'center'}}>
			Texto
			</Text>
			</Animated.View>

			<Animated.View style={{opacity: this.state.opacityLoopRet, height: 60, width: 200, marginTop: 50, justifyContent: 'center'}}>
			<Button title="Abrir Modal" onPress={this.openModal} />

			</Animated.View>

			<Modal animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={()=>{}}>
			<View style={styles.modalWindow}>
			<View style={styles.modalBody}>
			<ModalScreen close={() => {
				this.setModalVisible(false);
			}} />
			</View>
			</View>
			</Modal>

			</View>

			<View style={{marginTop: '70%'}}>
			<Button title="Piscar" onPress={this.blink} />
			</View>

			</View>

			);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalWindow:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalBody:{
		width: 300,
		height: 300,
		backgroundColor: '#FFFFFF',
		borderRadius: 10
	}
});

class ModalScreen extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.container}>
			<Button title="Fechar Modal" onPress={this.props.close}></Button>
			</View>
			)

	}
}