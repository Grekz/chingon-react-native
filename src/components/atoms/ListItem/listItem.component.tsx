import styled from '@emotion/native'
import React from 'react'

const ListItem = ({ children, ...props }) => (
  <StyledView {...props}>{children}</StyledView>
)

const StyledView = styled.View`
  border: 1px solid #999;
  min-height: 35;
`

ListItem.defaultProps = {}

export default ListItem
