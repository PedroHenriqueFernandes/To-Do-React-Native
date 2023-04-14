import styled from 'styled-components/native'
import { View, Text } from 'react-native'

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 24px;
  margin-top: 32px;
`

export const TextContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const TextCreatedTask = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.blue};
  font-weight: bold;
`

export const Counter = styled(View)`
  padding: 2px 8px;
  background-color: ${({ theme }) => theme['gray-400']};
  border-radius: 999px;
  margin-left: 8px;
`

export const TextCounter = styled(Text)`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`
