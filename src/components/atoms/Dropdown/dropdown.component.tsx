import styled from '@emotion/native'
import React from 'react'
import { Picker } from 'react-native'
const Dropdown = ({ selectedValue, options, ...props }) => (
  <StyledPicker selectedValue={selectedValue} {...props}>
    {options.map(x => (
      <StyledItem
        itemStyle={{ heigth: '20px' }}
        key={x.value}
        label={x.name}
        value={x.value}
      />
    ))}
  </StyledPicker>
)
const { Item } = Picker
const StyledItem = styled(Item)`
  background-color: ${props => props.theme.optionButton};
`
const StyledPicker = styled.Picker`
  width: 90%;
  border: 1px solid white;
`
Dropdown.defaultProps = {
  options: [],
}

export default Dropdown
