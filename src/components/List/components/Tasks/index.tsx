import { Text } from "react-native";
import { Header } from "./components/Header";
import { NoHaveTasks } from "./components/NoHaveTasks";
import { Container } from "./styles";

export function Tasks() {
    return (
        <Container>
            <Header />
            <NoHaveTasks />
        </Container>
    )
}