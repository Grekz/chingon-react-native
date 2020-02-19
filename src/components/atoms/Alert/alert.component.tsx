import styled from '@emotion/native'
import React from 'react'

const Alert = ({ children, ...props }) => (
  <StyledAlert {...props}>
    <>{children}</>
  </StyledAlert>
)

const StyledAlert = styled.TouchableHighlight`
  border-radius: 2.5px;
  padding: 10px;
  border: 1px solid #c3e6cb;
  background-color: ${props => props.backgroundColor};
`

Alert.defaultProps = {
  backgroundColor: '#d4edda',
}

export default Alert
