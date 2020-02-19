import { Svg } from 'expo'
import React from 'react'

const TwitchIcon = ({ size }) => (
  <Svg
    role="img"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Svg.Path d="M2.089 0L.525 4.175v16.694h5.736V24h3.132l3.127-3.132h4.695l6.26-6.258V0H2.089zm2.086 2.085H21.39v11.479l-3.652 3.652H12l-3.127 3.127v-3.127H4.175V2.085zM9.915 12.522H12v-6.26H9.915v6.26zm5.735 0h2.086v-6.26H15.65v6.26z" />
  </Svg>
)
TwitchIcon.defaultProps = {
  size: 24,
}
export default TwitchIcon
