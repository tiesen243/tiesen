import { gql } from '@apollo/client'

const GET_REPOSITORY = gql`
  query getRepository($username: String!, $repository: String!) {
    repository(name: $repository, owner: $username) {
      discussions(first: 10, categoryId: "DIC_kwDOJwd-Pc4CXR1U") {
        nodes {
          number
          title
          createdAt
          bodyHTML
          bodyText
          url
          author {
            avatarUrl
            login
          }
        }
      }
    }
  }
`

export default GET_REPOSITORY
