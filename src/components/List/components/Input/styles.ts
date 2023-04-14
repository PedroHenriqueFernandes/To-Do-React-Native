import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 54px;
  padding: 0 24px;
  gap: 4px;
  margin-top: -27px;
`

export const InputText = styled.TextInput`
  background-color: ${({ theme }) => theme['gray-500']};
  flex: 5;
  height: 54px;
  border-radius: 6px;
  padding: 0 16px;
  color: ${({ theme }) => theme['gray-100']};
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme['blue-dark']};
  flex: 1;
  width: 52px;
  height: 52px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`
