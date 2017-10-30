import { StackNavigator } from 'react-navigation'

import screen from 'hocs/screen'

import HomeScreen from 'screens/Home'
import EntryScreen from 'screens/Entry'

const headerStyles = {
	headerStyle: {
		backgroundColor: 'red'
	},
	headerTitleStyle: {
		color: '#fff'
	}
}

const App = StackNavigator({
	Home: {
		screen: screen()(HomeScreen),
		navigationOptions: () => {
			return {
				...headerStyles,
				title: 'Home'
			}
		}
	},
	Entry: {
		screen: screen()(EntryScreen),
		navigationOptions: ({ navigation }) => {
			const { state: { params: { title } } } = navigation

			return {
				...headerStyles,
				title
			}
		}
	}
})

export default App
