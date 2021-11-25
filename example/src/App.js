import React from 'react'
import { useMyHook } from '@juhand777/base'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App