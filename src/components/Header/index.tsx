import { Image } from "react-native";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <Image style={{ width: 120 }} source={require('../../../assets/logo.png')} />
        </Container>
    )
}