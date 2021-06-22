import React, { useState, useEffect } from 'react'

import LazyLoader from 'components/LazyLoader'

const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  return <div>{isLoading ? <LazyLoader /> : 'Hello from Home page'}</div>
}

export default Home
