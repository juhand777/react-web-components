import * as React from 'react'

import { Button } from './Button'

export const useMyHook = () => {
  let [{ counter }, setState] = React.useState({
    counter: 0,
  })

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      counter++
      setState({ counter })
    }, 1000)
    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return counter
}

export { Button }
