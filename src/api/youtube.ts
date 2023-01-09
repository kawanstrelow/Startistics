import axios from "axios"

export const SECRET_KEY: any = process.env.YOUTUBEAPI_SECRET_KEY

// export const apiKey = () => {
//   console.log('secret key dentro da função: ', SECRET_KEY)

//   axios.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=${SECRET_KEY}&q=BRASIL&order=viewCount`)
//     .then(response => console.log(response))
// }

module.exports = {
  getData(req: any, res: any) {
    console.log('secret key dentro da função: ', SECRET_KEY)
  
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=${SECRET_KEY}&q=BRASIL&order=viewCount`)
      .then(response => console.log(response))
  }
}