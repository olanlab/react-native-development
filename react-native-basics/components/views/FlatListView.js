import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class FlatListView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{ key: "Devin" },
						{ key: "Dan" },
						{ key: "Dominic" },
						{ key: "Jackson" },
						{ key: "James" },
						{ key: "Joel" },
						{ key: "John" },
						{ key: "Jillian" },
						{ key: "Jimmy" },
						{ key: "Julie" },
						{ key: "Jame" },
						{ key: "Joe" },
						{ key: "Ann" },
						{ key: "Anny" },
						{ key: "Bee" },
						{ key: "Cat" },
						{ key: "Dog" },
						{ key: "Doing" },
						{ key: "Da" },
						{ key: "Dream" },
						{ key: "Day" },
						{ key: "Fell" },
						{ key: "Feel" },
					]}
					renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
});
