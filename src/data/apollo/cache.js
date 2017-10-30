import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache({
  addTypename: true
})

export default cache
