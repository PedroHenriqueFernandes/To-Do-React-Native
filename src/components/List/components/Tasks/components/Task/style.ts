import styled from 'styled-components/native';
import { Text, View } from 'react-native'; 

export const Container = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    background-color: ${({ theme }) => theme["gray-500"]};
    border-radius: 8px;
    padding: 0 8px 0 20px;
    gap: 8px;
`;

export const TextContainer = styled(Text)`
    font-family: 'Inter';
    flex: 1;
    font-size: 14px;
    color: ${({ theme }) => theme["gray-100"]};
    align-items: center;
    justify-content: center;
`;

export const CheckButton = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme["blue"]};
`;