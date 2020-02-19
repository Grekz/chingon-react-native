import styled from '@emotion/native'
import React from 'react'
import ListItem from '../../atoms/ListItem'

const List = ({ items, ...props }) => (
  <StyledView {...props}>
    {items.map(li => (
      <ListItem key={li}>{li}</ListItem>
    ))}
  </StyledView>
)

const StyledView = styled.View`
  border: 1px solid #999;
`

List.defaultProps = {
  items: [null],
}

export default List
