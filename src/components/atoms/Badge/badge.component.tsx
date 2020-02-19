import styled from '@emotion/native'
import React from 'react'
import Text from '../Text'

const Badge = ({ children, color, ...props }) => (
  <StyledBadge {...props}>
    <Text color={color}>{children}</Text>
  </StyledBadge>
)

const StyledBadge = styled.View`
  border-radius: 50px;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 5px 10px;
`

Badge.defaultProps = {
  backgroundColor: 'red',
  color: 'white',
}

export default Badge
