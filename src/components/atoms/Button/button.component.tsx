import styled, { css } from '@emotion/native'
import React from 'react'
import Text from '../Text'

const Button = ({ title, children, fontColor, ...props }) => (
  <StyledButton {...props}>
    {title ? (
      <Text
        color={fontColor}
        style={ATTRS_FONT_SIZE[props.buttonSize]}
        textAlign="center"
      >
        {title}
      </Text>
    ) : (
        <>{children}</>
      )}
  </StyledButton>
)

const buttonType = {
  LINK: 'LINK',
  NORMAL: 'NORMAL',
  OUTLINE: 'OUTLINE',
}

const buttonSize = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

const ATTRS = {
  [buttonType.NORMAL]: css`
    background-color: #007bff;
    border-color: #007bff;
  `,
  [buttonType.OUTLINE]: css`
    border: 1px solid #007bff;
  `,
  [buttonType.LINK]: css``,
  [buttonSize.SMALL]: css`
    height: 35;
  `,
  [buttonSize.MEDIUM]: css`
    height: 45;
  `,
  [buttonSize.LARGE]: css`
    height: 60;
  `,
}
const ATTRS_FONT_SIZE = {
  [buttonSize.SMALL]: { fontSize: 12 },
  [buttonSize.MEDIUM]: { fontSize: 20 },
  [buttonSize.LARGE]: { fontSize: 30 },
}
const StyledButton = styled.TouchableHighlight`
  ${props => ATTRS[props.buttonType]}
  ${props => ATTRS[props.buttonSize]}
  padding: 10px;
  border-radius: 10px;
`

Button.defaultProps = {
  buttonSize: 'MEDIUM',
  buttonType: 'NORMAL',
  fontColor: '#fff',
}
export { buttonSize, buttonType }
export default Button
