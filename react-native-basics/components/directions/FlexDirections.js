import React, { Component } from "react";
import { View } from "react-native";

export default class FlexDirectionBasics extends Component {
	render() {
		// flexDirection: "row"
		// flexDirection: "row-reverse"
		// flexDirection: "column"
		// flexDirection: "column-reverse"
		// justifyContent: 'flex-start'
		// justifyContent: 'flex-end'
		// justifyContent: 'center'
		// justifyContent: 'space-between'
		// justifyContent: 'space-around'
		// justifyContent: 'space-evenly'
		// alignItems: 'stretch'
		// alignItems: 'flex-start'
		// alignItems: 'flex-end'
		// alignItems: 'center'
		// alignItems: 'baseline'
		// alignSelf: 'flex-start'
		// alignSelf: 'flex-end'
		// alignSelf: 'stretch'
		// alignSelf: 'center'
		// alignSelf: 'baseline'
		// alignContent: 'flex-start'
		// alignContent: 'flex-end'
		// alignContent: 'stretch'
		// alignContent: 'center'
		// alignContent: 'space-between'
		// alignContent: 'space-around'

		return (
			<View
				style={{
					flex: 1,
					flexDirection: "column",
					justifyContent: "flex-start",
					alignContent: "flex-start",
					flexWrap: "wrap"
				}}
			>
				<View style={{ width: 100, height: 100, backgroundColor: "red" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "black" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "grey" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "green" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "yellow" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "pink" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "gold" }} />
				<View style={{ width: 100, height: 100, backgroundColor: "silver" }} />
			</View>
		);
	}
}
