import styled from '@emotion/native'
import React from 'react'
import Button from '../../atoms/Button'

const ButtonGroup = ({ items, ...props }) => (
  <StyledView {...props}>
    {items.map((x, i) => (
      <Button key={i} title={x} />
    ))}
  </StyledView>
)

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

ButtonGroup.defaultProps = {
  items: [],
}

export default ButtonGroup
