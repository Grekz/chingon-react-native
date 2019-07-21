import styled from '@emotion/native'
import React from 'react'
import { Image } from 'react-native'

const Avatar = ({ uri, ...props }) => (
  <StyledAvatar {...props}>
    <>{!!uri && <StyledImage {...props} source={{ uri }} />}</>
  </StyledAvatar>
)

const StyledAvatar = styled.TouchableHighlight`
  border-radius: 25px;
  border: 1px solid white;
  background-color: gray;
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  overflow: hidden;
`
const StyledImage = styled.Image`
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
`

Avatar.defaultProps = {
  height: 50,
  uri: null,
  width: 50,
}

export default Avatar
