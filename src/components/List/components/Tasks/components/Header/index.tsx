import { Container, Counter, TextContainer, TextCounter } from "./styles";
import { SummaryTaskBlue, SummaryTaskPurple } from "../../../../../../styles/fonts/fonts";
import { Text, View } from 'react-native';

export function Header() {

    return (
        <Container>
            <TextContainer>
                <SummaryTaskBlue>
                    <Text>Criadas</Text>
                </SummaryTaskBlue>
                <Counter>
                    <TextCounter>0</TextCounter>
                </Counter>
            </TextContainer>
            <TextContainer>
                <SummaryTaskPurple>
                    <Text>Concluídas</Text>
                </SummaryTaskPurple>
                <Counter>
                    <TextCounter>0</TextCounter>
                </Counter>
            </TextContainer>
        </Container>
    )
}