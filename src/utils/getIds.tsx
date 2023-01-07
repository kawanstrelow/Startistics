export function getId(videosList: []) {

 let stringOfIds = ''   

 for (let video of videosList) {
    let t1 = stringOfIds.concat(video.id.videoId, ',')
    stringOfIds = t1
 }
 return stringOfIds
}