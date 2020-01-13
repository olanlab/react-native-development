import React, { Component } from "react";
import { Text } from "react-native";

class FlashingText extends Component {
	componentDidMount() {
		setInterval(() => this.setState(previousState => ({ isShowingText: !previousState.isShowingText })), 1000);
	}

	state = { isShowingText: true };

	render() {
		if (!this.state.isShowingText) {
			return <Text style={this.props.style}></Text>;
		}

		return <Text style={this.props.style}>{this.props.text}</Text>;
	}
}

export default FlashingText;
