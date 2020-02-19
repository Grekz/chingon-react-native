import styled from '@emotion/native'
import React from 'react'

const Progress = props => (
  <StyledView {...props}>
    <StyledProgress {...props} />
  </StyledView>
)

const StyledView = styled.View`
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height};
  border-radius: 5px;
  border: 1px solid transparent;
  width: 100%;
`
const StyledProgress = styled.View`
  background-color: ${props => props.progressColor};
  width: ${props => props.progress + '%'};
  border-radius: 5px;
  border: 1px solid transparent;
`

Progress.defaultProps = {
  backgroundColor: '#eee',
  height: 10,
  progress: 25,
  progressColor: '#333',
}

export default Progress
