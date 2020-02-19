import styled from '@emotion/native'
import React from 'react'
import Text from '../Text'

const Card = ({ title, children, ...props }) => (
  <StyledCard {...props}>
    {!!title && (
      <StyledSection>
        <Text>{title}</Text>
      </StyledSection>
    )}
    <StyledContent>{children}</StyledContent>
  </StyledCard>
)

const StyledCard = styled.View`
  border: 1px solid #aaa;
  border-radius: 10px;
  align-items: center;
`
const StyledContent = styled.View`
  padding: 20px;
  align-items: center;
`

const StyledSection = styled.View`
  border: 0 solid #aaa;
  align-items: center;
  border-bottom-width: 1px;
  width: 100%;
`
Card.defaultProps = {
  title: null,
}

export default Card
