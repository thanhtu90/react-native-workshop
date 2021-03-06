import React from 'react'
import {
  AppRegistry,
  PureComponent,
  ThemeProvider
} from 'react-native-mdcore'

import { Downloader } from '@containers'
import { Screen as ScreenNavigator } from '@navigators'
import Store from '@store'
import Theme from '@themes'

class Main extends PureComponent {

  render() {
    return (
      <Store>
        <ThemeProvider theme={Theme}>
          <Downloader>
            <ScreenNavigator />
          </Downloader>
        </ThemeProvider>
      </Store>
    )
  }
}

AppRegistry.registerComponent('project', () => Main)
