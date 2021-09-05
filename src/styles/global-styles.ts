import { createGlobalStyle } from 'styled-components'

import RobotoBoldWoff2 from '../fonts/Robotobold.woff2'
import RobotoBoldWoff from '../fonts/Robotobold.woff'
import RobotoWoff2 from '../fonts/Roboto.woff2'
import RobotoWoff from '../fonts/Roboto.woff'
import RobotoLightWoff2 from '../fonts/Robotolight.woff2'
import RobotoLightWoff from '../fonts/Robotolight.woff'

import { Colors, FontFamilies } from './style-const'

const GlobalStyles = createGlobalStyle`

/* Font-families */
@font-face {
       font-family: "Roboto";
       font-weight: bold;
        font-style: normal;
        font-display: swap;
        src: url(${RobotoBoldWoff2}) format("woff2"),
            url(${RobotoBoldWoff}) format("woff");
       }
      
       @font-face {
         font-family: "Roboto";
         font-weight: 300;
         font-style: normal;
         font-display: swap;
         src: url(${RobotoLightWoff2}) format("woff2"),
            url(${RobotoLightWoff}) format("woff");
       }
      
       @font-face {
         font-family: "Roboto";
         font-weight: normal;
         font-style: normal;
         font-display: swap;
         src: url(${RobotoWoff2}) format("woff2"),
            url(${RobotoWoff}) format("woff");
       }

/* Globals */
        body {
            color: ${Colors.FONT_BLACK};
            font-family: ${FontFamilies.PRIMARY};
        }

`
export default GlobalStyles 