import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput, Alert } from "react-native";
import FlashingText from "./components/texts/FlashingText";
import FixedDimensions from "./components/dimensions/FixedDimensions";
import FlexDimensions from "./components/dimensions/FlexDimensions";
import FlexDirections from "./components/directions/FlexDirections";
import ButtonTouches from "./components/touches/ButtonTouches";
import Touchables from "./components/touches/Touchables";
import ScrollDownView from "./components/views/ScrollDownView" ;
import FlatListView from "./components/views/FlatListView" ;
import SectionListView from "./components/views/SectionListView" ;
import FetchView from "./components/views/FetchView" ;
import ModalView from "./components/views/ModalView" ;
import dro from "./assets/dr-o.png";

export default function App() {
	const [value, changeText] = useState("");
	const [promptText, changePromptText] = useState("");

	return (
		<ModalView />
	);
}

const styles = StyleSheet.create({
	title: {
		color: "red",
		fontWeight: "bold",
		fontSize: 30,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
