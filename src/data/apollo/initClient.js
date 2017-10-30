import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'

import links from './links'
import cache from './cache'

const link = ApolloLink.from(links)

export default function iniClient() {
	const client = new ApolloClient({
		link,
		cache
	})

	return client
}
