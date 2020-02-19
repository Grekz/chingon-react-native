import styled from '@emotion/native'
import React from 'react'

const Divider = props => <StyledView {...props} />

const StyledView = styled.View`
  background-color: ${props => props.color};
  height: ${props => props.height};
`

Divider.defaultProps = {
  color: '#999',
  height: 1,
}

export default Divider
