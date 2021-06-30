import React from 'react'

import { gql, useQuery } from '@apollo/client'

import LazyLoader from 'components/LazyLoader'
import Survey from 'screens/Home/survey'

export const GET_SURVEY_LIST = gql`
  query Surveys($isActive: Boolean!) {
    surveys @include(if: $isActive) {
      edges {
        node {
          id
          title
          description
          coverImageUrl
        }
      }
    }
  }
`

const Home = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_SURVEY_LIST, {
    variables: {
      isActive: true
    }
  })

  if (loading) return <LazyLoader />
  if (error?.networkError?.message.includes('401')) {
    // TODO: Redirect to home page and clear local storage (this still not working because of REFRESH action bug)
    return <p>Unauthorized</p>
  }
  if (error) {
    // TODO: Create something went wrong screen
    return <p>Something went wrong</p>
  }

  return <Survey surveyList={data.surveys.edges} />
}

export default Home
