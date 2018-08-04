import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ListItems extends React.Component {

	state = {
		placeName: ""
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Sample Text</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		justifyContent: "space-between",
		paddingBottom: 10
	}
});
