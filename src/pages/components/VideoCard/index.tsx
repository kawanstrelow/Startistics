import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import { CalendarBlank, Eye, ThumbsUp } from "phosphor-react";
import { ImageContainer, InfoContainer, VideoCardContainer } from "../../../styles/components/videocard";
import numeral from "numeral"

interface VideoCardProps {
    thumbUrl: string,
    title: string,
    channelTitle: string,
    viewCount: number,
    likeCount: number
    publishedAt: string
}

export function VideoCard({thumbUrl, title, channelTitle, viewCount, likeCount, publishedAt}: VideoCardProps) {
    return (
            <VideoCardContainer>
                <ImageContainer>
                    <Image src={thumbUrl} alt='' width={360} height={200} />
                </ImageContainer>
                <InfoContainer>
                    <h1>{title}</h1>
                    <span><strong>{channelTitle} </strong></span>
                    <p>
                        <Eye size={16} weight="bold" />
                        <span>{numeral(viewCount).format('0a')}</span>
                    </p>
                    <p>
                        <ThumbsUp size={16} weight="bold" />
                        <span>{numeral(likeCount).format('0a')}</span>
                    </p>
                    <p>
                        <CalendarBlank size={16} weight="bold" />
                        <span>
                        {formatDistanceToNow(new Date(publishedAt), {
                            addSuffix: true,
                            locale: ptBR
                        })}</span>
                    </p>
                </InfoContainer>
            </VideoCardContainer>
    )
}