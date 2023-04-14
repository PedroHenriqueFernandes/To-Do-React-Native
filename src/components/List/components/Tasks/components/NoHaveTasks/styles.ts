import { View, Image } from 'react-native'
import styled from 'styled-components'

export const Container = styled(View)`
  justify-content: flex-start;
  align-items: center;
  padding: 48px 20px;
  margin: 20px 20px 0px 20px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme['gray-400']};
`

export const ImageContainer = styled(Image)`
  margin-bottom: 16px;
`

export const TextContainer = styled(View)`
  text-align: center;
`
