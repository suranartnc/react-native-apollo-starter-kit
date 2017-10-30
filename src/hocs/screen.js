import { compose } from 'recompose'

import withApolloClient from './withApolloClient'

export default function() {
  const hocs = []

  hocs.push(withApolloClient)

  return compose(...hocs)
}
