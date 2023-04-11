import { Button, Container, InputText } from "./styles";
import { Image } from "react-native";

export function Input() {
    return (
        <Container>
            <InputText
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={"#808080"}
            />
            <Button>
                <Image source={require("../../../../../assets/plus.png")} />
            </Button>
        </Container>
    )
}