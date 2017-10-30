import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { StyleSheet, View, WebView } from 'react-native'

import withLoadingIndicator from 'hocs/withLoadingIndicator'

function getWebPageFromContent(content) {
	const html = `
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<style>
				body {
					font-family: Arial, 'sans-serif';
					margin: 0;
					padding: 0;
				}
				p, h1 {
					padding: 0 15px;
				}
			</style>
		</head>
		<body>
			${content}
		</body>
		</htm>
	`

	return html
}

function EntryScreen({ data: { entry } }) {
	const body = `
		<img src="https:${entry.thumbnail}" width="100%" height="auto" />
		<h1>${entry.title}</h1>
		${entry.body[0]}
	`

	return (
		<View style={styles.container}>
			<WebView
				source={{ html: getWebPageFromContent(body) }}
				style={styles.webview}
			/>
		</View>
	)
}

EntryScreen.propTypes = {
	data: PropTypes.shape({
		entry: PropTypes.shape({
			thumbnail: PropTypes.string,
			body: PropTypes.arrayOf(PropTypes.string).isRequired
		})
	})
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	webview: {}
})

export default compose(graphql(gql``), withLoadingIndicator())(EntryScreen)
