import React, { Component } from "react";
import { View } from "react-native";

export default class FlexDimensions extends Component {
	render() {
		return (
			<View style={{ height: "100%" }}>
				<View style={{ flex: 1, backgroundColor: "red" }}></View>
				<View style={{ flex: 2, backgroundColor: "black" }}></View>
				<View style={{ flex: 3, backgroundColor: "grey" }} ></View>
			</View>
		);
	}
}
