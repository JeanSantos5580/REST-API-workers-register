import 'styled-components'
import { commonStyles } from '../styles/themes/common'

type ThemeType = typeof commonStyles

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
