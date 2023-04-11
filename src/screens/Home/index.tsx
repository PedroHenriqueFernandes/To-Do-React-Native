import { Container } from "./styles";import { Header } from "../../components/Header";
import { List } from "../../components/List";
;

export function Home(){
    return(
        <Container>
            <Header />
            <List />
        </Container>
    )
}