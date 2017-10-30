import { HttpLink } from 'apollo-link-http'

const uri = 'https://yourdomain.com/graphql'
const httpLink = new HttpLink({ uri })

export default httpLink
