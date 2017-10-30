import React from 'react'
import { ApolloProvider } from 'react-apollo'

import initClient from 'data/apollo/initClient'

export default BaseComponent =>
  function withApolloClient(props) {
    const client = initClient()
    return (
      <ApolloProvider client={client}>
        <BaseComponent {...props} />
      </ApolloProvider>
    )
  }
