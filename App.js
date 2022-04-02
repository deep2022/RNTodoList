import React from 'react'
import {View, Text} from 'react-native'
import AppContainer from './src/navigation'
import { ModeProvider } from './src/components/context'

const App = () => {
  return (
    <ModeProvider>
      <AppContainer />
    </ModeProvider>
  )
}

export default App