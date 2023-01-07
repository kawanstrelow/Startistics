import { HeaderContainer } from "./styles";

export default function HeaderComponent() {
    return (
        <HeaderContainer>
            <a href="/">
                <h1>Startistics</h1>
            </a>
            <nav>
                <span>Criadores</span>
                <span>Contato</span>
                <span>Top 100 Brasil</span>
                <span>Top 100 Mundial</span>
            </nav>

        </HeaderContainer>
    )
}