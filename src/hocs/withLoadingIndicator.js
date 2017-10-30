import React from 'react'
import { branch, renderComponent, compose } from 'recompose'

import { StyleSheet, View, ActivityIndicator } from 'react-native'

function Preloader() {
	return (
		<View style={styles.container}>
			<ActivityIndicator />
		</View>
	)
}

export default function() {
	return compose(
		branch(props => {
			return props.data.loading
		}, renderComponent(Preloader))
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20
	}
})
