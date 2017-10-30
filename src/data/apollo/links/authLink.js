import { ApolloLink } from 'apollo-link'

const authLink = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			authorization: null
		}
	})
	return forward(operation)
})

export default authLink
