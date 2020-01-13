import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";

export default class ModalView extends Component {
	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		return (
			<View style={{ marginTop: 50 }}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
					}}
				>
					<View style={{ flex:1, marginTop: 50, backgroundColor: 'pink' }}>
						<View>
							<Text>Hello World!</Text>

							<TouchableHighlight
								onPress={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}
							>
								<Text>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>

				<TouchableHighlight
					onPress={() => {
						this.setModalVisible(true);
					}}
				>
					<Text>Show Modal</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
