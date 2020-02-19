import styled from '@emotion/native'
import React from 'react'
import Text from '../../atoms/Text'
const Breadcrumbs = ({ items, ...props }) => (
  <StyledView {...props}>{items}</StyledView>
)

const StyledView = styled.View`
  border: 1px solid #999;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

Breadcrumbs.defaultProps = {
  items: [null],
}

export default Breadcrumbs
