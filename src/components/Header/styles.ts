import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  max-height: 180px;
  background-color: ${({ theme }) => theme['gray-700']};
  align-items: center;
  justify-content: center;
`
