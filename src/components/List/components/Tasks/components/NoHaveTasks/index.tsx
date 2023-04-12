import { Text } from "react-native";
import { Container, TextContainer } from "./styles";
import { TextNoHaveTask, TextNoHaveTaskBold } from "../../../../../../styles/fonts/fonts";
import { ImageContainer } from "./styles";

export function NoHaveTasks() {

    return (
        <Container>
            <ImageContainer source={require('../../../../../../../assets/clipboard.png')} />
            <TextContainer>
                <TextNoHaveTaskBold>
                    <Text>Você ainda não tem tarefas cadastradas</Text>
                </TextNoHaveTaskBold>
                <TextNoHaveTask>
                    <Text>Crie tarefas e organize seus itens a fazer</Text>
                </TextNoHaveTask>
            </TextContainer>
        </Container>
    )
}