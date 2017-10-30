import React from 'react'
import PropTypes from 'prop-types'

import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Touchable from 'react-native-platform-touchable'

export default function EntryItem({ entry, onPress }) {
  const { title, thumbnail } = entry

  return (
    <View style={styles.container}>
      <Touchable onPress={onPress(entry)}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: `https:${thumbnail}`
          }}
          resizeMode="contain"
        />
      </Touchable>

      <Touchable onPress={onPress(entry)}>
        <Text style={styles.title}>{title}</Text>
      </Touchable>
    </View>
  )
}

EntryItem.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
}

const win = Dimensions.get('window')
const paddingSize = 10
const imageWidth = win.width - paddingSize * 2
const imageRatio = 300 / 180
const white = '#fff'

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    padding: paddingSize,
    backgroundColor: white,
    flex: 1
  },
  thumbnail: {
    flex: 1,
    alignSelf: 'stretch',
    width: imageWidth,
    height: imageWidth / imageRatio,
    borderRadius: 5
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
})
