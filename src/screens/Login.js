// imr
import React, { Component } from 'react'

// imrn
import { StyleSheet, View, Alert } from 'react-native'

import { SocialIcon } from 'react-native-elements'

// rcc
class LoginScreen extends Component {
  handleSubmitButton = () => {
    Alert.alert('Sign In With GitHub')
  }
  render() {
    return (
      <View style={styles.container}>
        <SocialIcon
          button
          title="Sign In With GitHub"
          type="github"
          onPress={this.handleSubmitButton}
        />
      </View>
    )
  }
}

// rnss
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default LoginScreen
