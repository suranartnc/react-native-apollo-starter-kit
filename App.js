import { StackNavigator } from 'react-navigation'

import screen from 'hocs/screen'

import LoginScreen from 'screens/Login'
// import EntryScreen from 'screens/Entry'

const headerStyles = {
  headerStyle: {
    backgroundColor: 'red'
  },
  headerTitleStyle: {
    color: '#fff'
  }
}

const App = StackNavigator({
  Login: {
    screen: screen()(LoginScreen),
    navigationOptions: () => {
      return {
        ...headerStyles,
        title: 'Login'
      }
    }
  }
  // Entry: {
  //   screen: screen()(EntryScreen),
  //   navigationOptions: ({ navigation }) => {
  //     const { state: { params: { title } } } = navigation

  //     return {
  //       ...headerStyles,
  //       title
  //     }
  //   }
  // }
})

export default App
