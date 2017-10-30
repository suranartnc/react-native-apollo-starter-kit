import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { compose, withHandlers } from 'recompose'

import { StyleSheet, View, FlatList } from 'react-native'

import withLoadingIndicator from 'hocs/withLoadingIndicator'
import EntryItem from 'components/EntryItem'

function HomeScreen(props) {
  const { data: { entries }, fetchEntry } = props

  return (
    <View style={styles.container}>
      <FlatList
        data={entries.edges.map(entry => entry.node)}
        renderItem={({ item }) => {
          return <EntryItem entry={item} onPress={fetchEntry} />
        }}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

HomeScreen.propTypes = {
  data: PropTypes.shape({
    entries: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: EntryItem.propTypes.entry
        })
      )
    })
  }),
  fetchEntry: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default compose(
  graphql(gql``),
  withLoadingIndicator(),
  withHandlers({
    fetchEntry: ({ navigation }) => ({ id, title }) => () => {
      navigation.navigate('Entry', {
        id,
        title
      })
    }
  })
)(HomeScreen)
