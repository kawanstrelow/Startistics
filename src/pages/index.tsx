import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HomeContainer, InputText, SearchField } from '../styles/pages/home'
import { getId } from '../utils/getIds'
import { FilterBox } from './components/FilterBox'
import { Summary } from './components/Summary'
import { VideoCard } from './components/VideoCard'

export default function Home() {

  const [videosIds, setVideosIds] = useState('')
  const [videos, setVideos] = useState([])

  function getVideoData() {

    if (videosIds !== '') {
      axios
        .get(`https://www.googleapis.com/youtube/v3/videos?part=id,snippet,contentDetails,player,recordingDetails,statistics,status,topicDetails&key=AIzaSyA_9Kl-JGLLwmH1tV3h07t4KlIuf4ANnhQ&id=${videosIds}`)
        .then(response => setVideos(response.data.items))
    }
  }

  async function getVideosIds(url: string) {
    await axios.get(url)
        .then(response => setVideosIds(getId(response.data.items)))
    
    await axios.get('https://restcountries.com/v2/all')
        .then(res => console.log(res.data))
  }

  async function handleInput(text: any) {
    event?.preventDefault()

    getVideosIds(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyA_9Kl-JGLLwmH1tV3h07t4KlIuf4ANnhQ&q=${text.target[0].value}&order=viewCount`)
  }

  useEffect(() => {
    getVideoData()
  }, [videosIds])

  const videosTag = videos.length >= 1 ? 
    videos.map(video => <VideoCard
      key={video.id}
      thumbUrl={video.snippet.thumbnails.high.url}
      title={video.snippet.localized.title}
      channelTitle={video.snippet.channelTitle}
      viewCount={video.statistics.viewCount}
      likeCount={video.statistics.likeCount}
      publishedAt={video.snippet.publishedAt}
    />)
   : ''

  return (
    <>
      <Head>
        <title>Startistics</title>
      </Head>
      <HomeContainer>
        <Summary></Summary>
        <SearchField onSubmit={handleInput}>
          <InputText minLength={3} id='searchterm' placeholder='Coloque o nome do canal'/>
          <button type='submit'>Buscar</button>
        </SearchField>
        <FilterBox />
        {videosTag}
      </HomeContainer>
    </>
  )
}
