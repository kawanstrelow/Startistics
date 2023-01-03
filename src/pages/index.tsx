import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HomeContainer, InputText, SearchField } from '../styles/pages/home'

export default function Home() {

  const [videosData, setVideosData] = useState([])
  const [videos, setVideos] = useState([])

  function getVideoData() {
    let videosId: any[] = []
    videosData
      .map(video => videosId.push(video.id.videoId))
  }

  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDQhDnF9kBZO362BCki3La2DYANVs6vWFg&q=Brasileiros nos estados unidos&order=viewCount')
      .then(response => setVideosData(response.data.items))
  }, [])

  getVideoData()  
  console.log(videos)
  return (
    <>
      <Head>
        <title>Startistics</title>
      </Head>
      <HomeContainer>
        <SearchField>
          <p>Find channel's statistics: </p>
          <InputText />
        </SearchField>
      </HomeContainer>
    </>
  )
}
