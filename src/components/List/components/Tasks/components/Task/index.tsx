import { Image, Text } from "react-native";
import { TaskProps } from "../../../../../../contexts/TasksContext";
import { CheckButton, Container, TextContainer } from "./style";

export function Task({content}:TaskProps) {
    return(
        <Container>
            <CheckButton />
            <TextContainer>
                <Text>
                    {content}
                </Text>
            </TextContainer>
            <Image source={require('../../../../../../../assets/trash.png')} />
        </Container>
    )
}