import React from 'react'
import { useMyHook, TwilioLogo } from '@juhand777/base'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      <TwilioLogo
        height='240px'
        width='520px'
        customStyles={{ border: '1px solid black' }}
      />
      {example}
    </div>
  )
}
export default App
