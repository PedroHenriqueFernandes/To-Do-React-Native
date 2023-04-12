import styled from "styled-components/native";
import { Text } from "react-native";

export const Input = styled(Text)`
    font-family: 'Inter';
    font-size: 16px;
    font-weight: regular;
`;

export const SummaryTask = styled(Text)`
    font-family: 'Inter';
    font-weight: bold;
`;

export const SummaryTaskBlue = styled(SummaryTask)`
    color: ${({ theme }) => theme["blue"]};
`;

export const SummaryTaskPurple = styled(SummaryTask)`
    color: ${({ theme }) => theme["purple"]};
`;

export const TextNoHaveTaskBold = styled(Input)`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${({ theme }) => theme["gray-300"]};
`;

export const TextNoHaveTask = styled(TextNoHaveTaskBold)`
    font-weight: regular;
    text-align: center;
`;