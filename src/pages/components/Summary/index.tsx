import { SummaryContainer, SummaryItems } from "../../../styles/components/summary";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryItems>Estatísticas de um canal específico</SummaryItems>
            <SummaryItems>Vídeos mais acessados com um termo específico</SummaryItems>
            <SummaryItems>Canais mais acessados com um termo específico</SummaryItems>
        </SummaryContainer>
    )
}