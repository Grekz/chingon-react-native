import styled from '@emotion/native'
import React from 'react'

const Header = ({ items, ...props }) => (
  <StyledView {...props}>
    <StyleadStatusBar />
    {items.map(li => (
      <HeaderItem key={li}>{li}</HeaderItem>
    ))}
  </StyledView>
)
const HeaderItem = styled.View``
const StyleadStatusBar = styled.StatusBar``
const StyledView = styled.View`
  border: 1px solid #999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

Header.defaultProps = {
  items: [null],
}

export default Header
